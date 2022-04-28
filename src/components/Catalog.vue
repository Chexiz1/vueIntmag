<template>
  <div class="catalog">
    <router-link :to="{ name: 'cart', params: { cart_data: CART } }">
      <div class="catalog-linc-to-cart">Cart: {{ CART.length }}</div>
    </router-link>
    <h1>Catalog</h1>
    <div class="catalog-list">
      <catalog-item
        v-for="product in PRODUCTS"
        :key="product.article"
        :product_data="product"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import Catalog from '@/components/Catalog.vue'
import CatalogItem from '@/components/CatalogItem'
import { mapActions, mapState } from 'vuex'
import { mapGetters } from 'vuex'
export default {
  name: 'catalog',
  components: {
    CatalogItem,
    Catalog,
  },
  props: {},
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['PRODUCTS', 'CART']),
  },
  methods: {
    ...mapActions(['GET_PRODUCTS_FROM_API', 'ADD_TO_CART']),
    addToCart(data) {
      this.ADD_TO_CART(data)
    },
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API().then((response) => {
      if (response.data) {
        console.log('DATA')
      }
    })
  },
}
</script>

<style>
.catalog-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
.catalog-linc-to-cart {
  position: absolute;
  top: 15ox;
  right: 15px;
  padding: 16px;
  border: solid 2px #aeaeae;
}
</style>
