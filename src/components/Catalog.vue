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
import { mapActions, mapState } from 'vuex'
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
    ...mapGetters(['products']),
  },
  methods: {
    ...mapActions(['GET_PRODUCTS_FROM_API']),
    showChaildarticle(data) {
      console.log(data)
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
</style>
