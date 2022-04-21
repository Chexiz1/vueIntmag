import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    products: [],
  },
  getters: {
    products(state) {
      return state.products
    },
  },
  mutations: {
    set_products_to_state(state, products) {
      state.products = products
    },
  },
  action: {
    async get_products_from_api({ state, commit }) {
      return axios
        .get(' http://localhost:3000/products')
        .then((products) => {
          commit('set_products_to_state', products.data)
          return products
        })
        .catch((error) => {
          console.log(error)
          return error
        })
    },
  },
})
