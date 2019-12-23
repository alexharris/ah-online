<template>
    <div class="w-full sm:w-1/2 lg:w-1/3 text-center ">
        <div class=" m-4 px-4 pt-4 shadow-lg hover:bg-ah-800  bg-white work">
            <a :href="'/?p=' + slug" class="border-0 hover:text-white">
            <!-- <div> -->
                <img class="thumb" :src="'./' + slug + '-thumb.jpg'" />
            <!-- </div>  -->
            <div class="p-4">{{title}}</div>
            </a>     
        </div>
    </div>
    <!-- <div :class="'bg-' + color + '-' + strength" class="p-4 my-4 shadow">
        <slot></slot>
    </div> -->
</template>

<script>

export default {
    name: "WorkItem", 
    props: ['url', 'title', 'slug']

};
</script>