<template>
  <section class="px-8 gradient bg-fixed">
    <!-- <div class="flex flex-row justify-center hero" id="single-thumb">
      <img class="max-w-full m-4" :src="'./' + id + '-thumb.jpg'" />
    </div> -->
    <div
      class="w-full conatiner mx-auto mt-16 flex flex-col justify-center items-center"
    >
      <div class="w-full flex flex-col md:flex-row conatiner mx-auto">
        <div
          class="w-full md:w-1/2 lg:w-1/3 flex flex-col md:h-screen md:sticky top-0 pt-16"
        >
          <slot></slot>
       
        </div>
        <div class="w-full md:w-1/2 lg:w-2/3 py-4 md:pl-8 flex justify-center items-start py-4">
          <img class="shadow-xl" :src="id + '/1.jpg'" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Single",
  props: ["id"]
};
</script>
