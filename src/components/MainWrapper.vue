<template>
  <div class="mainwrapper">
    <p></p>
    <catalog />
    <cart v-if="CART.length" :cart_data="CART" />
  </div>
</template>

<script>
import Catalog from '@/components/Catalog'
import Cart from '@/components/Cart'
import { mapGetters } from 'vuex'
export default {
  components: {
    Catalog,
    Cart,
  },
  name: 'mainwrapper',
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['CART']),
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
