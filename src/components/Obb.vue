<template>
  <Single id="obb">
    <h1 class="w-full pb-16 text-center">Other Brother Beer</h1>
    <div class="w-full flex flex-col md:flex-row flex-wrap p-4 lg:p-8 mb-8 border border-ah-800 items-center">
      <div class="w-full md:w-1/2 p-4  flex justify-center">
        <img src="obb-logo.jpg" />
      </div>
      <div class="w-full md:w-1/2 p-4">
        <p>
Other Brother Beer is a new brewery in Seaside, Ca. When they contacted me, the brick and mortar brewery was opening up soon, and they needed their site up and running on a short timeline. This was achieved through solid project management and a focus on core functionality. I also provided documentation on how to complete basic content update tasks, and now the staff can run the site themselves. 
</p>
        <p>
          Site: <a href="https://otherbrotherbeer.com"> https://otherbrotherbeer.com</a>
        </p>
      </div>
    </div>
    <img class="pb-8" src="obb/1.jpg" />
    <img class="pb-8" src="obb/2.jpg" />
  </Single>
</template>

<script>
import Single from "./Single.vue";
export default {
  name: "app",
  components: {
    Single
  }
};
</script>
