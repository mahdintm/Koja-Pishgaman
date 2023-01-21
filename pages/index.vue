<template>
  <div class="content" style="padding-top: 10px">
    <b-container class="mt-5 bv-example-row">
      <b-row>
        <card_
          v-for="item in items"
          :key="item.id"
          :title="item.title"
          :description="item.description"
          :imgLink="item.img"
          :link="item.link"
          :status="item.status"
        />
      </b-row>
    </b-container>
  </div>
</template>

<script>
import card_ from '@/components/card.vue'
export default {
  components: { card_ },
  layout: 'default',
  data() {
    return {
      items: [],
    }
  },
  async mounted() {
    this.content_item = await fetch(`/api/api_/index_items`).then(
      async (res) => {
        this.items = await res.json()
      }
    )
  },
}
</script>
<style>
@import url(@/static/css/content.css);
</style>
