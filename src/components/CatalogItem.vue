<template>
  <div class="catalog_item">
    <img
      class="catalog-image"
      :src="require('@/assets/styles/images/' + product_data.image)"
      alt="img"
    />
    <p class="catalog-item-name">{{ product_data.name }}</p>
    <p class="catalog-item-price">Price: {{ product_data.price }} руб</p>
    <button class="catalog-item-add-to-price btn" @click="addToCart">
      Add mo cart
    </button>
  </div>
</template>

<script>
export default {
  name: 'catalog-item',
  props: {
    product_data: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  methods: {
    addToCart() {
      this.$emit('addToCart', this.product_data)
    },
  },
}
</script>

<style>
.catalog_item {
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: 16px;
  margin-bottom: 16px;
}
.catalog-image {
  width: 100px;
}
</style>
