<template>
  <div class="catalog-item">
    <img
      :src="require('@/assets/styles/images/' + product_data.image)"
      alt="img"
    />
    <p class="catalog-item-name">{{ product_data.name }}</p>
    <p class="catalog-item-price">Price: {{ product_data.price }}</p>
    <button class="catalog-item-add-to-price btn">Add mo cart</button>
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
}
</script>

<style>
.catalog-item {
  flex-basis: 29%;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: 16px;
  margin-bottom: 16px;
}
</style>
