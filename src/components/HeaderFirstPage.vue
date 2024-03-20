<script>
import FlowerIcon from '@/components/icons/FlowerIcon.vue'
import Buttons from '@/components/Buttons.vue'

export default {
  components: {
    FlowerIcon,
    Buttons
  }
}
</script>

<template>
  <header
    class="bg-[url('../../public/assets/bg-patern.jpg')] w-full bg-cover h-[100vh] flex justify-center flex-col"
  >
    <section class="flex flex-col justify-center items-center">
      <h1
        class="font-ImperialScript text-8xl text-primary xxsm:text-[70px] xsm:text-[80px] sm:text-[90px] md:text-[100px] lg:text-[100px]"
      >
        Undangan
      </h1>
      <!-- image dec 1 -->
      <!-- <Decoration1 :style="{ width: 'w-[300px]', height: 'w-[500px]' }" /> -->
      <FlowerIcon
        class="xxsm:w-[250px] xxsm:h-[300px] xsm:w-[250px] xsm:h-[280px] sm:w-[280px] sm:h-[300px] md:w-[300px] md:h-[300px] lg:w-[320px] lg:h-[320px]"
      />
      <h1
        class="font-ImperialScript text-7xl text-primary xxsm:text-[70px] xsm:text-[80px] sm:text-[90px] md:text-[100px] lg:text-[100px]"
      >
        Metatah
      </h1>
    </section>
    <section class="flex flex-col justify-center items-center mt-3">
      <h2 class="font-poppins font-medium xxsm:text-sm xsm:text-md sm:text-lg md:text-xl">
        Yth. Kepada Bpk/Ibu/Saudara/i
      </h2>
      <Buttons />
    </section>
  </header>
</template>
