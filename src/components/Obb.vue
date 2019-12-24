<template>
  <Single id="obb">
    <h1 class="w-full pb-16 text-center">Other Brother Beer</h1>
    <div class="w-full flex flex-col md:flex-row flex-wrap p-4 lg:p-8 mb-8 border border-ah-800 items-center">
      <div class="w-full md:w-1/2 p-4  flex justify-center">
        <img src="obb-logo.jpg" />
      </div>
      <div class="w-full md:w-1/2 p-4">
        <p>
Text        </p>
        <p>
          Site: <a href="https://otherbrotherbeer.com"> https://otherbrotherbeer.com</a>
        </p>
      </div>
    </div>
    <img class="pb-8" src="obb/1.jpg" />
    <img class="pb-8" src="obb/2.jpg" />
    <img class="pb-8" src="obb/3.jpg" />
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
