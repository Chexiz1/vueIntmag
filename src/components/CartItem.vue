<template>
  <div class="cart-item">
    <img
      class="cart-item-img"
      :src="require('@/assets/styles/images/' + cart_item_data.image)"
      alt="img"
    />
    <div class="cart_item_info">
      <p>
        {{ cart_item_data.name }}
      </p>
      <p>
        {{ cart_item_data.price }}
      </p>
      <p>
        {{ cart_item_data.article }}
      </p>
    </div>
    <div class="cart_item_quantity">
      <p>Кол-во</p>
      {{ cart_item_data.quantity }}
    </div>
    <button @click="deleteFromCart">Удалить</button>
  </div>
</template>

<script>
export default {
  name: 'cart-item',
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  computed: {},
  methods: {
    deleteFromCart() {
      this.$emit('deleteFromCart')
    },
  },
  mounted() {},
}
</script>

<style>
.cart-item {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: 16px;
  margin-bottom: 16px;
}
.cart-item-img {
  max-width: 50px;
}
</style>
