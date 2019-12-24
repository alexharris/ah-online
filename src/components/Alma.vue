<template>
  <Single id="alma">
    <h1 class="w-full pb-16 text-center">Alma and Friends</h1>
    <div class="w-full flex flex-col md:flex-row flex-wrap p-4 lg:p-8 mb-8 border border-ah-800 items-center">
      <div class="w-full md:w-1/2 p-4  flex justify-center">
        <img src="alma-logo.jpg" />
      </div>
      <div class="w-full md:w-1/2 p-4">
        <p>
          Alma is a small non-profit organization utilizing landscape architecture practices to increase awareness of environmental, land use, and human rights issues. They do not need much from their website, and don't add content often, so this is a simple site hosted on Github with no CMS. I just occasionaly update the content as needed. This is cheaper and easier for everyone.
        </p>
        <p>
          Site: <a href="https://almaandfriends.org"> https://almaandfriends.org</a>
        </p>
      </div>
    </div>
    <img class="pb-8" src="alma/1.jpg" />
    <img class="pb-8" src="alma/2.jpg" />
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
