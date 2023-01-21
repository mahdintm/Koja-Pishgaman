<template>
  <div>
    <b-navbar class="rtl nav-bg-color" toggleable="lg" type="dark">
      <b-navbar-brand
        href="#"
        style="
          display: flex;
          align-items: baseline;
          justify-content: flex-start;
        "
      >
        <img
          src="@/static/img/logo.png"
          class="d-inline-block align-top"
          alt="Logo"
          width="35px"
        />
        <div style="margin-right: 6px">
          <span style="color: #25252580">داشبورد</span>
          <span style="color: #252525">پیشگامان</span>
        </div>
      </b-navbar-brand>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: 'navbar',
}
</script>
<style>
@import url(@/static/css/variables.css);
@import url(@/static/css/navbar.css);
.nuxt-link-active {
  color: white !important;
  text-decoration: underline !important;
}
nav a {
  color: antiquewhite !important;
}
</style>
