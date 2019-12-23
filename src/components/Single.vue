<template>
  <section class="pb-16 gradient bg-fixed">
    <div class="flex justify-center py-16 hero">
      <img :src="'./' + id + '-thumb.jpg'" />
    </div>
    <div class="w-full md:w-4/5 px-4 md:px-16 mx-auto mt-16">
      <slot></slot>
      <a class="bg-ah-800 border border-ah-800 text-white px-4 py-2 mt-8 inline-block hover:text-ah-800 hover:bg-white" href="/">Home</a>
    </div>
  </section>
</template>

<script>
export default {
    name: "Single",
    props:['id']
};

</script>
