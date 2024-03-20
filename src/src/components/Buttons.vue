<script>
import OpenIcon from '@/components/icons/OpenIcon.vue'
import { RouterLink } from 'vue-router'

export default {
  components: {
    OpenIcon,
    RouterLink
  }
}
</script>
<template>
  <RouterLink :to="{ name: 'SecondPage' }"
    ><button
      class="bg-primary rounded-[30px] flex items-center px-5 py-1 text-white text-poppins mt-2 font-medium xxsm:text-sm xsm:text-md sm:text-lg md:text-xl hover:scale-105 hover:transition-all"
    >
      <OpenIcon /> Buka Undangan
    </button>
  </RouterLink>
</template>
