<template>
  <div class="w-full sm:w-1/2 lg:w-1/3 relative work-item pb-8 sm:pr-8">
    <div v-if="casestudy == 'true'"
      class="casestudy mr-4 mt-4 z-50 font-bold text-center bg-yellow-300 rounded-full w-16 h-16 absolute right-0 text-sm text-red-600 flex align-center items-center leading-tight text-black shadow uppercase"
    >
      Case Study
    </div>
    <div class="py-4 work rounded">
      <a :href="'/?p=' + slug" class="border-0">
        <img class="thumb shadow-lg" :src="'./' + slug + '-thumb.jpg'" />
        <h4 class="pt-4 uppercase">{{ title }}</h4>
        
      </a>
      {{subtitle}}
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkItem",
  props: ["url", "title", "subtitle", "slug", "casestudy"]
};
</script>
