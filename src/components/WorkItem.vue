<template>
  <div class="w-full sm:w-1/2 lg:w-1/3 relative">
    <div v-if="casestudy == 'true'"
      class="casestudy z-50 font-bold text-center bg-yellow-300 rounded-full w-16 h-16 absolute right-0 text-sm text-red-600 flex align-center items-center leading-tight text-black shadow uppercase"
    >
      Case Study
    </div>
    <div class="p-4 m-4 hover:bg-ah-800 border border-ah-800 work uppercase text-white">
      <a :href="'/?p=' + slug" class="border-0 hover:text-white">
        <img class="thumb" :src="'./' + slug + '-thumb.jpg'" />
        <div class="pt-4">{{ title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkItem",
  props: ["url", "title", "slug", "casestudy"]
};
</script>
