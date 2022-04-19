<template>
  <div class="mainwrapper">
    <p>{{ title }}</p>
    <catalog />
    <cart />
  </div>
</template>

<script>
import Catalog from '@/components/Catalog'
import Cart from '@/components/Cart'
export default {
  components: {
    Catalog,
    Cart,
  },
  name: 'm-ainwrapper',
  data() {
    return {}
  },
}
</script>

<style>
.mainwrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 900px;
  margin: 0 auto;
  flex-direction: column;
}
</style>
