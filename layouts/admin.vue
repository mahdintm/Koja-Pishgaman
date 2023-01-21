<template>
  <div>
    <sidebar></sidebar>
    <div class="main-content">
      <div class="admin-navbar">
        <div>آیتم ها</div>
        <div class="profile">
          <div class="name-profile">Mahdi Nemati</div>
          <img class="img-profile" src="@/static/img/profile.png" alt="" />
        </div>
      </div>
      <nuxt />
    </div>
  </div>
</template>

<script>
import sidebar from '~/components/admin/sidebar.vue'
export default {
  components: { sidebar },
  layout: 'admin',
}
</script>
<style scoped>
@font-face {
    font-family: Vazir;
    src: url('@/static/fonts/Vazir.ttf');
  }
* {
  direction: rtl !important;
  font-family: Vazir !important;
  text-align: right !important;
}
body {
  background: #f7f8fc !important;
  height: 100%;
}
.admin-navbar {
  padding-right: 30px;
  padding-left: 30px;
  padding-top: 30px;
  background: #f7f8fc;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.admin-navbar .profile .img-profile {
  border: 1.5px solid #dfe0eb;
  border-radius: 100%;
  width: 44px;
}

.admin-navbar .profile {
  display: flex;
  align-items: center;
  flex-direction: row;
  align-content: center;
  justify-content: flex-start;
  flex-wrap: nowrap;
}
.admin-navbar .profile .name-profile {
  padding-left: 14px;
}
.main-content {
  background-color: #f7f8fc;
  width: calc(100vw - 255px);
  margin-right: 255px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  align-content: space-around;
}
</style>
