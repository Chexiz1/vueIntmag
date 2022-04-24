<template>
  <div class="cart">
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
import CartItem from '@/components/CartItem'
import { mapActions } from 'vuex'
export default {
  name: 'cart',
  components: {
    CartItem,
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return []
      },
    },
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
