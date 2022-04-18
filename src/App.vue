<template>
  <div>
    <h1 class="header">Привет я програма!</h1>
    <h2 class="headerh">Я родитель</h2>
    <main-wrapper />
  </div>
</template>

<script>
import MainWrapper from '@/components/MainWrapper'
export default {
  components: {
    MainWrapper,
  },
}
</script>

<style>
.header {
  display: flex;
  justify-content: center;
}
.headerh {
  display: flex;
  justify-content: center;
}
</style>
