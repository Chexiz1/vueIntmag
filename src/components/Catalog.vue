<template>
  <div class="catalog">
    <h1>Catalog</h1>
    <div class="catalog-list">
      <catalog-item
        v-for="product in products"
        :key="product.article"
        :product_data="product"
        @sendDataToParent="showChaildarticle"
      />
    </div>
  </div>
</template>

<script>
import CatalogItem from '@/components/CatalogItem'
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'
export default {
  name: 'catalog',
  components: {
    CatalogItem,
  },
  props: {},
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      products: 'products',
    }),
  },
  methods: {
    ...mapActions(['get_products_from_api']),
    showChaildarticle(data) {
      console.log(data)
    },
  },
  mounted() {
    this.get_products_from_api
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
