<template>
    <div class="admin-content">
        <b-container style="width: 95%;">
            <b-row class="my-1">
                <b-col sm="3">
                    <label>عنوان آیتم :</label>
                </b-col>
                <b-col sm="9">
                    <b-form-input type="text" v-model="items.title"></b-form-input>
                </b-col>
            </b-row>
            <b-row class="my-1">
                <b-col sm="3">
                    <label>توضیحات :</label>
                </b-col>
                <b-col sm="9">
                    <b-form-input type="text" v-model="items.text"></b-form-input>
                </b-col>
            </b-row>
            <b-row class="my-1">
                <b-col sm="3">
                    <label>لینک :</label>
                </b-col>
                <b-col sm="9">
                    <b-form-input type="text" v-model="items.link"></b-form-input>
                </b-col>
            </b-row>
            <b-row class="my-1">
                <b-col sm="3">
                    <label>عکس :</label>
                </b-col>
                <b-col sm="9">
                    <b-form-file v-model="ImageFiles" style="text-align: left !important;" accept="image/jpeg, image/png, image/gif"></b-form-file>
                </b-col>
            </b-row>
            <b-row class="my-1">
               <b-button @click="submit_item()">افزودن جدید</b-button>

            </b-row>
        </b-container>
    </div>
</template>
<script>
export default {
    layout:"admin",
    data() {
        return {
            items:{
                title:"",
                text:"",
                link:"",
                img:""
            },
            ImageFiles:""
        }
    },
    methods: {
        async submit_item(){
            var data = new FormData()
            data.append('files', this.ImageFiles, (this.ImageFiles).name)
            await fetch(`/uploadCenter/upload`, {
                method: 'POST',
                headers: {},
                body: data,
            }).then(async (res) => {
                let a = await res.json()
                this.items.img=`/uploadCenter/upload/${a.name}`
            })
            await fetch(`/api/api_/index_items`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(this.items),
            }).then(async (res) => {
                // let a = await res.json()
                await this.$router.push(`admin`)
            })
        }
    },
}
</script>