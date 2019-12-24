<template>
  <Single id="oe">
    <h1 class="w-full pb-16 text-center">Open Engagement</h1>
    <div class="w-full flex flex-col md:flex-row flex-wrap p-4 lg:p-8 mb-8 border border-ah-800 items-center">
      <div class="w-full md:w-1/2 p-4  flex justify-center">
        <img src="oe-logo.jpg" />
      </div>
      <div class="w-full md:w-1/2 p-4">
        <p>
          Open Engagement is an annual conference for socially engaged art. I maintained their website over the course of a few years, and in that time got to experience how small organizations can do big things (hint: it takes a lot of work). Technology can be a powerful tool for enabling this work. On hiatus from doing their annual conference, the site I set up for OE now serves, amongst other things, as an archive and respository to chronicle all of the cool stuff they made happen.
        </p>
        <p>
          Site: <a href="http://openengagement.info"> http://openengagement.info</a>
        </p>
      </div>
    </div>
    <img class="pb-8" src="oe/1.jpg" />
    <img class="pb-8" src="oe/2.jpg" />
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
