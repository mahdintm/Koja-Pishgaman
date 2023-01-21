<template>
  <div>
    <NavBar></NavBar>
    <nuxt />
    <Footer></Footer>
  </div>
</template>
<script>
import NavBar from '@/components/navbar.vue'
import Footer from '@/components/footer.vue'
export default {
  components: { NavBar },
}
</script>
<style>
@import url(@/static/css/main.css);
@import url(@/static/css/variables.css);
@import url(@/static/css/rtl.css);
</style>
