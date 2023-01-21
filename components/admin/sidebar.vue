<template>
    <div class="sidebar">
      <div class="logo">
        <img src="~/static/img/logo.png" width="25px" alt="" />
        <div class="text">پنل مدیریت داشبود</div>
      </div>
      <div class="links">
        <nuxt-link class="child-link" to="/admin">
          <font-awesome-icon class="link-logo" :icon="['fas', 'user-secret']" />
          <div class="link-text">آیتم ها</div>
        </nuxt-link>
        <nuxt-link class="child-link" to="#"
          ><font-awesome-icon class="link-logo" :icon="['fas', 'user-secret']" />
          <div class="link-text">سوالات متداول</div></nuxt-link
        >
        <nuxt-link class="child-link" to="#"
          ><font-awesome-icon class="link-logo" :icon="['fas', 'user-secret']" />
          <div class="link-text">Overview</div></nuxt-link
        >
        <hr />
        <nuxt-link class="child-link" to="#"
          ><font-awesome-icon class="link-logo" :icon="['fas', 'user-secret']" />
          <div class="link-text">تنظیمات</div></nuxt-link
        >
      </div>
    </div>
  </template>
  <script>
  export default {
    name: 'sidebar',
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
  .sidebar {
    background-color: #363740;
    width: 255px;
    position: fixed;
    right: 0;
    height: 100%;
  }
  .sidebar .logo {
    width: 100%;
    margin-right: 32px;
    position: absolute;
    right: 0;
    height: 5.5vh;
    display: flex;
    align-items: flex-end;
    flex-direction: row;
  }
  .sidebar .logo .text {
    color: #a4a6b3;
    margin-right: 2%;
  }
  .sidebar .links {
    width: 100%;
    position: absolute;
    right: 0;
    top: 10vh;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
    transition: all 200ms !important;
  }
  .sidebar .links .child-link {
    width: 100%;
    height: 56px;
    padding-right: 12%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: baseline;
    align-content: center;
    flex-wrap: nowrap;
    color: #a4a6b3 !important;
    transition: all 200ms !important;
    padding-top: 18px;
  }
  .sidebar .links .nuxt-link-active {
    background-color: rgba(159, 162, 180, 0.08);
    border-right: solid 3px #dde2ff;
    color: #dde2ff !important;
    text-decoration: none !important;
  }
  .sidebar .links .child-link:hover {
    background-color: rgba(159, 162, 180, 0.08);
  
    color: #dde2ff !important;
    transition: all 200ms !important;
  }
  .sidebar .links .child-link .link-text {
    margin-right: 24px;
    opacity: 1 !important;
  }
  .sidebar .links .child-link .link-logo {
    opacity: 1 !important;
  }
  .sidebar hr {
    background: rgba(223, 224, 235, 0.15);
    width: 100%;
  }
  </style>
  