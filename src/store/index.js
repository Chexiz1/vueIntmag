import { createStore, storeKey } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    products: [],
    cart: [],
  },
  getters: {
    PRODUCTS(state) {
      return state.products
    },
    CART(state) {
      return state.cart
    },
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products
    },
    SET_CART: (state, product) => {
      if (state.cart.length) {
        const isProductExists = false
        store.cart.map(function (item) {
          if (item.article === product.article) {
            isProductExists = true
            item.quantity++
          }
        })
        if (!isProductExists) {
          state.cart.push(product)
        }
      } else {
        state.cart.push(product)
      }
    },
    REMOVE_FROM_CART: (state, i) => {
      state.cart.splice(i, 1)
    },
  },
  actions: {
    async GET_PRODUCTS_FROM_API({ commit }) {
      return await axios('http://localhost:3000/products', {
        method: 'GET',
      })
        .then((products) => {
          commit('SET_PRODUCTS_TO_STATE', products.data)
          return products
        })
        .catch((error) => {
          console.log(error)
          return error
        })
    },
    ADD_TO_CART({ commit }, product) {
      commit('SET_CART', product)
    },
    DELETE_FROM_CART({ commit }, i) {
      commit('REMOVE_FROM_CART', i)
    },
  },
})
