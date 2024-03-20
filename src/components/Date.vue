<script>
import DateIcon from '@/components/icons/DateIcon.vue'
import PlaceIcon from '@/components/icons/PlaceIcon.vue'
import TimeIcon from '@/components/icons/TimeIcon.vue'

export default {
  components: {
    DateIcon,
    PlaceIcon,
    TimeIcon
  }
}
</script>
<template>
  <section class="flex justify-center items-center flex-col gap-1">
    <DateIcon
      class="xxsm:w-[140px] h-fit xsm:w-[150px] sm:w-[290px] md:w-[310px] lg:w-[420px] xl:w-[420px] xxsm:mt-5 sm:mt-10"
    />
    <h1
      class="font-ImperialScript text-primary xxsm:text-3xl xsm:text-xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-9xl"
    >
      24.03.2024
    </h1>
    <p
      class="font-poppins xxsm:text-[10px] xsm:text-xs sm:text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-primary mb-5"
    >
      Minggu
    </p>
  </section>
  <section
    class="flex justify-center items-center xxsm:gap-5 lg:gap-8 xxsm:flex-col lg:flex-row mb-10"
  >
    <div
      class="rounded-lg py-10 px-5 border-solid border-2 border-primary flex justify-center items-center flex-col text-center p-4 xxsm:w-[250px] xsm:w-[290px] sm:w-[380px] md:w-[500px] lg:w-[300px] lg:h-[300px] xl:w-[350px] transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
    >
      <TimeIcon class="xxsm:w-[40px] xsm:w-[50px] sm:w-[60px] md:w-[70px] h-fit" />
      <p
        class="text-primary font-poppins xxsm:text-xs xsm:text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl"
      >
        Pukul : 14.00 WITA - Selesai
      </p>
    </div>
    <div
      class="rounded-lg px-2 py-6 border-solid border-2 border-primary flex justify-center items-center flex-col text-center xxsm:w-[250px] xsm:w-[290px] sm:w-[380px] md:w-[500px] lg:w-[300px] lg:h-[300px] xl:w-[350px] transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 duration-300"
    >
      <PlaceIcon class="xxsm:w-[40px] xsm:w-[50px] sm:w-[60px] md:w-[70px] h-fit" />
      <p
        class="text-primary font-poppins xxsm:text-xs xsm:text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl"
      >
        Lokasi : Jl. Pulau Samosir I No.14, Penarukan, Kec. Buleleng, Kab. Buleleng
      </p>
    </div>
  </section>
</template>
