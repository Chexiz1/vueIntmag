<template>
  <div class="catalog">
    <h1>Catalog</h1>
    <catalog-item />
  </div>
</template>

<script>
import CatalogItem from '@/components/CatalogItem'
export default {
  name: 'catalog',
  components: {
    CatalogItem,
  },
}
</script>

<style scoped></style>
