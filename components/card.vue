<template>
  <a v-if="status" :href="link" target="_blank"
    ><b-col md="25" fluid="md" sm>
      <b-card class="mb-4 card_">
        <span class="logo"
          ><img style="max-width: 81px" :src="imgLink" alt="img"
        /></span>
        <div class="text">
          <div>
            <b>{{ title }}</b>
          </div>
          <!-- <div>
            <b-card-text>{{ description }}</b-card-text>
          </div> -->
        </div>
      </b-card>
    </b-col></a
  >
</template>
<script>
export default {
  props: ['title', 'description', 'imgLink', 'link', 'status'],
}
</script>
<style>
a {
  text-decoration: none !important;
}
</style>
