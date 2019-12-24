<template>
  <Single id="pico">
    <h1 class="w-full pb-16 text-center">Picoyune</h1>
    <div class="w-full flex flex-col md:flex-row flex-wrap p-4 lg:p-8 mb-8 border border-ah-800 items-center">
      <div class="w-full md:w-1/2 p-4  flex justify-center">
        <img src="pico-logo.jpg" />
      </div>
      <div class="w-full md:w-1/2 p-4">
        <p>
text        </p>
        <p>
          Site: <a href="https://picoyune.com"> https://picoyune.com</a>
        </p>
      </div>
    </div>
    <img class="pb-8" src="pico/1.jpg" />
    <img class="pb-8" src="pico/2.jpg" />
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
