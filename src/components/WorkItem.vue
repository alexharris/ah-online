<template>
  <div class="w-full sm:w-1/2 lg:w-1/3 text-center relative">
    <div v-if="casestudy == 'true'"
      class="casestudy font-bold bg-yellow-300 rounded-full w-16 h-16 absolute bottom-0 right-0 text-sm text-red-600 flex align-center items-center leading-tight text-black shadow uppercase"
    >
      Case Study
    </div>
    <div class=" m-4 px-4 pt-4 shadow-lg hover:bg-ah-800 bg-white work">
      <a :href="'/?p=' + slug" class="border-0 hover:text-red-600">
        <img class="thumb" :src="'./' + slug + '-thumb.jpg'" />
        <div class="p-4">{{ title }}</div>
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
