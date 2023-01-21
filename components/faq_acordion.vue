<template>
  <div
    style="margin-left: 12.5%; margin-right: 12.5%; width: 75%"
    class="accordion"
    role="tablist"
  >
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle="`${id}`">{{ title }}</b-button>
      </b-card-header>
      <b-collapse :id="id" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ text }}</b-card-text>
          <a v-if="link" :href="link" target="_blank"
            ><b-button>دانلود راهنما</b-button></a
          >
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>
<script>
export default {
  props: ['id', 'title', 'text', 'link'],
}
</script>
<style scoped>
.card {
  background-color: #2aabe1 !important;
  color: white;
}
.card * {
  /* background-color: aquamarine !important; */
  direction: rtl !important;
  text-align: right;
}
</style>
