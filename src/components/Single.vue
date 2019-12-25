<template>
  <section class="pb-16 gradient bg-fixed">
    <div class="flex flex-row justify-center py-16 hero">
      <img class="max-w-full" :src="'./' + id + '-thumb.jpg'" />
    </div>
    <div
      class="w-full lg:w-4/5 px-4 md:px-16 mx-auto mt-16 flex flex-col justify-center items-center"
    >
      <slot></slot>
      <a
        class="bg-ah-800 border border-ah-800 text-white px-4 py-2 mt-8 inline-block hover:text-ah-800 hover:bg-white self-start"
        href="/"
        >Home</a
      >
    </div>
  </section>
</template>

<script>
export default {
  name: "Single",
  props: ["id"]
};
</script>
