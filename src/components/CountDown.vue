<template>
  <section class="flex justify-center items-center flex-col gap-1 bg-secondary py-10">
    <h1
      class="font-ImperialScript text-primary xxsm:text-2xl xsm:text-2xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
    >
      Menuju Hari Bahagia
    </h1>
    <div class="flex justify-center items-center gap-5">
      <div
        class="flex flex-col items-center xxsm:text-lg xsm:text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-primary italic"
      >
        <h2 id="day" class="font-bold">{{ displayDays }}</h2>
        <h4
          class="xxsm:text-sm xsm:text-md sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-primary"
        >
          Days
        </h4>
      </div>
      <div
        class="flex flex-col items-center xxsm:text-lg xsm:text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-primary italic"
      >
        <h2 id="hours" class="font-bold">{{ displayHours }}</h2>
        <h4
          class="xxsm:text-sm xsm:text-md sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"
        >
          Hours
        </h4>
      </div>
      <div
        class="flex flex-col items-center xxsm:text-lg xsm:text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-primary italic"
      >
        <h2 id="minutes" class="font-bold">{{ displayMinutes }}</h2>
        <h4
          class="xxsm:text-sm xsm:text-md sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"
        >
          Minutes
        </h4>
      </div>
      <div
        class="flex flex-col items-center xxsm:text-lg xsm:text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-primary italic"
      >
        <h2 id="seconds" class="font-bold">{{ displaySeconds }}</h2>
        <h4
          class="xxsm:text-sm xsm:text-md sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"
        >
          Seconds
        </h4>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: ['year', 'month', 'date', 'hour', 'minute', 'second', 'millisecond'],
  data: () => ({
    displayDays: 0,
    displayHours: 0,
    displayMinutes: 0,
    displaySeconds: 0
  }),
  computed: {
    _seconds: () => 1000,
    _minutes() {
      return this._seconds * 60
    },
    _hours() {
      return this._minutes * 60
    },
    _days() {
      return this._hours * 24
    }
    // end() {
    //   return new Date(
    //     this.year,
    //     this.month,
    //     this.day,
    //     this.hour,
    //     this.minute,
    //     this.second,
    //     this.millisecond
    //   )
    // }
  },
  mounted() {
    this.showRemaining()
  },
  methods: {
    formatNum: (num) => (num < 10 ? '0' + num : num),

    showRemaining() {
      const timer = setInterval(() => {
        const now = new Date()
        const end = new Date(2024, 2, 25, 0, 0, 0, 0)
        const distance = end.getTime() - now.getTime()

        if (distance < 0) {
          clearInterval(timer)
          return
        }
        const days = Math.floor(distance / this._days)
        const hours = Math.floor((distance % this._days) / this._hours)
        const minutes = Math.floor((distance % this._hours) / this._minutes)
        const seconds = Math.floor((distance % this._minutes) / this._seconds)

        this.displaySeconds = this.formatNum(seconds)
        this.displayMinutes = this.formatNum(minutes)
        this.displayHours = this.formatNum(hours)
        this.displayDays = this.formatNum(days)
      }, 1000)
    }
  }
}
</script>
