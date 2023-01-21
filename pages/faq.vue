<template>
  <b-container class="bv-example-row">
    <b-row class="text-center">
      <div style="color: white; text-align: center; margin-top: 40px">
        <b style="font-size: 40px">سوالات متداول</b>
        <br />
        <span style="font-size: 25px"
          >راهنمای استفاده از سرویس‌های کال سنتر لطفا در صورت بروز مشکل و عدم
          <br />
          دسترسی در سرویس‌دسک آی تی درخواست ثبت کنید</span
        >
      </div>
    </b-row>

    <faq_acardion
      style="margin-top: 40px"
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :text="item.text"
      :link="item.link"
    />
  </b-container>
</template>
<script>
import faq_acardion from '@/components/faq_acordion.vue'

export default {
  components: { faq_acardion },
  data() {
    return {
      items: [
        {
          id: 'AC_1',
          title:
            'چرا از اینترنت تلفن همراه به عنوان هات اسپات و ابزار کار استفاده نکنیم؟',
          text: `تلفن همراه برای وصل بودن به شبکه از دکل های مخابرات متفاوتی استفاده میکنند و در هر لحظه این جابه جایی بین دکلی میتواند صورت بگیرد و ارتباطی به اینکه شما در جای ثابتی هستید یا خیر ندارد، که این امر باعث قطع و وصل لحظه ایی اینترنت میشود که کاربران در ازتباط روزمره متوجه اون نمیشوند. اما نرم افزارهایی مثل ویپ جهت ارتباط پایدار این مسیر ارتباطی را مجدد چک میکنند که این امر باعث ایجاد وقفه های یک الی چند ثانبه در صدا میشود، به همین منظور شما با مشکلات زیر روبرو میشوید: 
           1. امکان لاگین نشدن در جبر`,
          link: 'asd',
        },
        {
          id: 'AC_2',
          title:
            'چرا از اینترنت تلفن همراه به عنوان هات اسپات و ابزار کار استفاده asdنکنیم؟',
          text: 'aasdsd',
          link: '',
        },
      ],
    }
  },
}
</script>
