<template>
  <div id="app" class="w-full py-8 px-4 container mx-auto">
    <div class="mx-auto w-full px-4">
      <HeaderAnimation />
      <p class="intro lg:w-2/3 mx-auto pt-8">I am a web developer in Oakland, CA with over 9 years of experience helping arts and education organizations, artists, non-profits and small businesses communicate on the web.</p>
      <p>Past clients: UC Berkeley, YBCA, 500 Capp Street, Open Engagement</p>
      <div class="flex flex-col lg:flex-row">
        <div class="w-full lg:w-1/3">
          <h3>BAMPFA</h3>
        </div>
        <div class="w-full lg:w-2/3">
          <img @mouseover="bampfa = false"  v-if="bampfa" src="./assets/bampfa-blue.png" />
          <img @mouseleave="bampfa = true" v-if="!bampfa" src="./assets/bampfa.png" />        
        </div>        
      </div> 
      

      <p>I have previosuly worked with:</p>
      <ul>
        <li>UC Berkeley</li>
        <li>YBCA</li>
        <li><a href="https://bampfa.org">BAMPFA</a></li>
        <li><a href="https://500cappstreet.org/">500 Capp Street Foundation</a> <a href="/casestudy/2019/08/13/500-capp.html" class="inline border-0"><svg class="inline" version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><title>eye</title><path d="M16 6c-6.979 0-13.028 4.064-16 10 2.972 5.936 9.021 10 16 10s13.027-4.064 16-10c-2.972-5.936-9.021-10-16-10zM23.889 11.303c1.88 1.199 3.473 2.805 4.67 4.697-1.197 1.891-2.79 3.498-4.67 4.697-2.362 1.507-5.090 2.303-7.889 2.303s-5.527-0.796-7.889-2.303c-1.88-1.199-3.473-2.805-4.67-4.697 1.197-1.891 2.79-3.498 4.67-4.697 0.122-0.078 0.246-0.154 0.371-0.228-0.311 0.854-0.482 1.776-0.482 2.737 0 4.418 3.582 8 8 8s8-3.582 8-8c0-0.962-0.17-1.883-0.482-2.737 0.124 0.074 0.248 0.15 0.371 0.228v0zM16 13c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z"></path></svg></a></li>
        <li><a href="http://openengagement.info/">Open Engagement</a></li>
      </ul>       
      <p>I try to be particularly attuned to how a particular solution might fit into an organization's technological capacity, and make choices accordingly. This might result in a fully custom Wordpress site, a single static HTML page, or even just a Google form.</p>
      <p>I also enjoy providing documentation and training to make sure that whatever the solution is continues to be manageable and helpful for the long term.
      <p>My proficiencies include: HTML, CSS/SCSS, JS (Vue, Vanilla, jQuery), PHP, and I have a lot of experience with CMS implementation including Drupal, Wordpress, Squarespace, Shopify and more.</p>
      
      
      <!-- <ul>
        <li>Web development, frontend and backend, including:
          <ul>
            <li>HTML</li>
            <li>Javascript (Vue.js, vanilla, jquery, etc)</li>
            <li>CSS/SCSS (with or without a framework)</li>
            <li>PHP</li>
          </ul>
        </li>
        <li>CMS installation, templating, custom development, housekeeping (Drupal, Wordpress, Squarespace, Shopify and more).</li>
        <li>Information architecture, content organization and strategy.</li>
        <li>Training, consultation, and documentation.</li>
      </ul> -->
     
    </div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
import HeaderAnimation from "./components/HeaderAnimation.vue";
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  data: function() {
    return  {
      bampfa: true
    }
  },
  components: {
    HeaderAnimation
    // HelloWorld
  },
  methods: {
    bampfaHover() {
      this.bampfa = !this.bampfa
    }
  }
};
</script>


