<template>
  <div class="cart">
    <router-link :to="{ name: 'catalog' }">
      <div class="catalog-linc-to-cart">Вернуться в каталог</div>
    </router-link>
    <h1>Cart</h1>
    <cart-item
      v-for="(item, i) in cart_data"
      :key="item.article"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(i)"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Catalog from '@/components/Catalog.vue'
import CartItem from '@/components/CartItem'
import { mapActions } from 'vuex'
export default {
  name: 'cart',
  components: {
    CartItem,
    Catalog,
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return []
      },
    },
  },
  computed: {
    ...mapGetters(['CART']),
  },
  methods: {
    ...mapActions(['DELETE_FROM_CART']),

    deleteFromCart(i) {
      this.DELETE_FROM_CART(i)
    },
  },
}
</script>

<style></style>
