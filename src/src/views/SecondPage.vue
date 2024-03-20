<script>
import HeaderSecondPage from '@/components/HeaderSecondPage.vue'
import OmSwastiastu from '@/components/OmSwastiastu.vue'
import NamePage from '@/components/NamePage.vue'
import Date from '@/components/Date.vue'
import CountDown from '@/components/CountDown.vue'
import Maps from '@/components/Maps.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    HeaderSecondPage,
    OmSwastiastu,
    NamePage,
    Date,
    CountDown,
    Maps,
    Footer
  }
}
</script>
<template>
  <HeaderSecondPage />
  <OmSwastiastu />
  <NamePage />
  <Date />
  <CountDown />
  <Maps />
  <Footer />
</template>
