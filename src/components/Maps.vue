<template>
  <div class="flex justify-center items-center my-5">
    <h1
      class="font-ImperialScript text-primary xxsm:text-2xl xsm:text-2xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
    >
      Petunjuk Lokasi Acara
    </h1>
  </div>

  <div class="mapouter flex justify-center items-center">
    <div
      class="gmap_canvas transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 duration-300"
    >
      <iframe
        class="gmap_iframe rounded-lg border-solid border-2 border-primary flex justify-center items-center flex-col text-center p-4 xxsm:w-[250px] xsm:w-[290px] sm:w-[380px] md:w-[600px] lg:w-[700px] lg:h-[800px] xl:w-[900px] cursor-pointer"
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d987.5152658378439!2d115.1074006284831!3d-8.095255699493725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMDUnNDIuOSJTIDExNcKwMDYnMjkuMCJF!5e0!3m2!1sen!2sid!4v1710900638612!5m2!1sen!2sid"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        width="600"
        height="450"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</template>
<style>
.mapouter {
  position: relative;
  text-align: right;
  width: 100%;
  height: 380px;
}
.gmap_canvas {
  overflow: hidden;
  background: none !important;
}
.gmap_iframe {
  height: 380px !important;
}
</style>
