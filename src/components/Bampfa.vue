<template>
  <Single id="bampfa">
    <h1 class="w-full pb-16 text-center">BAMPFA</h1>
    <div class="w-full flex flex-col md:flex-row flex-wrap p-4 lg:p-8 mb-8 border border-ah-800 items-center">
      <div class="w-full md:w-1/2 p-4  flex justify-center">
        <img src="bampfa-logo.jpg" />
      </div>
      <div class="w-full md:w-1/2 p-4">
        <p>
          I worked for 4.5 years as the Web Editor and Electronic Communications Manager at the Berkeley Art Museum and Pacific Film Archive. My responsibilities spanned a wide range of tasks including web design and development, UI/UX testing and design, communications strategy, information architecture, database design, hiring and managing contractors and work-study students, and more. I have in-depth firsthand knowledge of many of the challenges facing arts and education institutions today, and learned how to leverage technological solutions to help alleviate those challenges.
        </p>
        <p>
          Site: <a href="https://bampfa.org"> https://bampfa.org</a>
        </p>
      </div>
    </div>
    <img class="pb-8" src="bampfa/1.jpg" />
    <img class="pb-8" src="bampfa/2.jpg" />
    <img class="pb-8" src="bampfa/3.jpg" />
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
