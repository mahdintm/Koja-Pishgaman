<template>
  <div class="admin-content">
    <div class="items-buttons">
      <nuxt-link to="/admin/new-item">
        <b-button>افزودن جدید</b-button></nuxt-link
      >
    </div>
    <b-table
      id="tbl"
      :filter="filter"
      striped
      hover
      :items="items"
      :fields="fields"
    >
      <template #cell(تعداد)="data">
        {{ data.index + 1 }}
      </template>

      <template #cell(remove)="data"
        ><font-awesome-icon
          @click="remove(data.item.id)"
          class="link-logo"
          :icon="['fas', 'trash']"
      /></template>
      <template #cell(edit)="data"
        ><font-awesome-icon class="link-logo" :icon="['fas', 'pen-to-square']"
      /></template>
      <template #cell(status)="data">
        <b-form-checkbox
          style="color: #a7211b"
          :checked="!!data.item.status"
          @change="change($event, data.item.id)"
          switch
        ></b-form-checkbox>
      </template>
    </b-table>
  </div>
</template>
<script>
export default {
  layout: 'admin',
  data() {
    return {
      filter: null,
      fields: [
        'تعداد',
        { key: 'title', label: 'عنوان آیتم' },
        { key: 'text', label: 'توضیحات آیتم' },
        { key: 'edit', label: 'ویرایش' },
        { key: 'remove', label: 'حذف' },
        { key: 'status', label: 'وضعیت فعالیت' },
        ,
      ],
      items: [],
    }
  },
  async mounted() {
    this.items = await fetch(`/api/api_/index_items`).then(async (res) => {
      return await res.json()
    })
  },
  methods: {
    async change(status, id) {
      await fetch(`/api/api_/index_items`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          id: id,
          data: 'status',
          value: status,
        }),
      }).then(async (res) => {
        await res.json()
      })
    },
    async remove(id) {
      this.items = await fetch(`/api/api_/index_items`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          id: id,
        }),
      }).then(async (res) => {
        return await res.json()
      })
    },
  },
}
</script>
<style>
@font-face {
  font-family: Vazir;
  src: url('@/static/fonts/Vazir.ttf');
}
* {
  font-family: Vazir !important;
}
.items-buttons {
  margin-bottom: 15px;
  padding-right: 15px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  width: 100%;
  flex-direction: row;
}
.admin-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
}
#tbl {
  width: 95%;
  text-align: center;
}
</style>
