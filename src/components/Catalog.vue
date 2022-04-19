<template>
  <div class="catalog">
    <h1>Catalog</h1>
    <div class="catalog-list">
      <catalog-item
        v-for="product in products"
        :key="product.article"
        :product_data="product"
      />
    </div>
  </div>
</template>

<script>
import CatalogItem from '@/components/CatalogItem'
export default {
  name: 'catalog',
  components: {
    CatalogItem,
  },
  props: {},
  data() {
    return {
      products: [
        {
          image: '1.jpg',
          name: 'T-shirt 1',
          price: 2100.234234234,
          article: 'T1',
          available: true,
        },
        {
          image: '2.jpg',
          name: 'T-shirt 2',
          price: 3150.12312412,
          article: 'T2',
          available: true,
        },
        {
          image: '3.jpg',
          name: 'T-shirt 3',
          price: 4200.51524,
          article: 'T3',
          available: false,
        },
        {
          image: '4.jpg',
          name: 'T-shirt 4',
          price: 5300.1245512,
          article: 'T4',
          available: true,
        },
        {
          image: '5.jpg',
          name: 'T-shirt 5',
          price: 6500.3522314,
          article: 'T5',
          available: false,
        },
        {
          image: '6.jpeg',
          name: 'T-shirt 6',
          price: 8700.4124123,
          article: 'T6',
          available: true,
        },
      ],
    }
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
</style>
