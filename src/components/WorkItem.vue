<template>
  <div class="w-full sm:w-1/2 lg:w-1/3 relative work-item sm:pr-8">
    <div v-if="casestudy == 'true'"
      class="casestudy mr-4 mt-4 z-50 font-bold text-center bg-yellow-300 rounded-full w-16 h-16 absolute right-0 top-0 flex align-center items-center leading-tight shadow hover:bg-yellow-400"
    >

      <a :href="'?p=' + slug" class="text-sm text-red-600 uppercase no-underline border-0 hover:text-red-800">Case Study</a>
    </div>
    <div class="py-4 work rounded">
      <!-- <a :href="'/?p=' + slug" class="border-0"> -->
            <a :href="url" class="border-0">

        <img class="thumb shadow-lg" :src="'./' + slug + '-thumb.jpg'" />
        <h4 class="pt-4 pb-0 uppercase">{{ title }}</h4>
      </a>
      <h5 class="text-gray-500 uppercase text-sm">{{subtitle}}</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkItem",
  props: ["url", "title", "subtitle", "slug", "casestudy"]
};
</script>
