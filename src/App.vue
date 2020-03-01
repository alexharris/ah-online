<template>
  <div id="app" class="gradient container mx-auto pt-12">
    <a
      v-if="currentRoute != ''"
      class="m-2 fixed top-0 bg-white right-0 text-ah-900 cursor-pointer border border-ah-900 rounded-full w-12 h-12 flex justify-center items-center hover:bg-ah-900 hover:text-white shadow-lg m-4 z-50 mt-16 mr-16"
      href="/"
      ><svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="times"
        class="svg-inline--fa fa-times fa-w-11 h-8 w-8"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 352 512"
      >
        <path
          fill="currentColor"
          d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
        ></path>
      </svg>
    </a>
    <div class="bg-white w-full py-8 px-8">
      <h1 class="text-xl uppercase font-bold ">Alex Harris Web Development</h1>
    </div>
    <section
      v-if="currentRoute == ''"
      class="px-8 w-full"
    >
      <!-- <HeaderAnimation /> -->
      <p class=" w-full md:w-4/5 pb-16 text-4xl pb-48">
        I am a web developer in Oakland, CA with over 10 years of experience
        helping arts and education organizations, artists, non-profits and small
        businesses communicate on the web.
      </p>
      <h2 class="text-xl uppercase font-bold ">Selected Work</h2>
      <div class="flex flex-row flex-wrap pb-8 pb-48" id="work-items">
        <WorkItem url="/bampfa" title="BAMPFA" subtitle="Drupal 7" slug="bampfa" />
        <WorkItem
          url="/capp"
          title="500 Capp Street"
          subtitle="Wordpress"
          slug="capp"
          casestudy="true"
          
        />
        <WorkItem url="/obb" title="Other Brother Beer" subtitle="Wordpress"  slug="obb" />
        <WorkItem url="/alma" title="Alma and Friends" subtitle="Vue.js" slug="alma" />
        <WorkItem url="/oe" title="Open Engagement" subtitle="Wordpress" slug="oe" />
        <WorkItem url="/picoyune" title="Picoyune" subtitle="Static Site" slug="pico" />
        <WorkItem url="/kgf" title="Kessenick Gamma & Free LLP" subtitle="Squarespace" slug="kgf" />
        <WorkItem url="/dither" title="Dither it!" subtitle="Vue.js" slug="dither" />
      </div>
      
      <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-1/2 pl-0 px-4">
        <h2 class="text-xl uppercase font-bold ">About</h2>
          <p>
            I have been making websites professionally for over 10 years, and have a wide variety of experience. As a developer at Cast Iron Coding in Portland, OR, I spent countless hours building sites for clients, and training and supporting them in their ongoing use.</p><p>I have also spent time on the other side of the client/developer relationship as the Web Editor and Electronic Communications Manager at the Berkeley Art Museum and Pacific Film Archive at the UC Berkeley, where one of my duties including hiring and working with assorted contractors to build new functionality for their website (as well as developing a wide range of functionality myself).</p><p> These experiences have given me perspective on what it takes to communicate succesfully on the web (hint: it is as much or more about good communication and planning than the technology involved).
          </p>
        </div>
        <div class="w-full md:w-1/2 pl-0 md:pl-4 px-4">
        <h2 class="text-xl uppercase font-bold ">Services</h2>
          <p> I provide a wide range of development, design, consultation and training services.</p>
          <p>I believe that a successful website is focused first and foremost on accessible, clear, and up to date content.</p>
          <p>
            My technical proficiencies include: HTML, CSS/SCSS, JS (Vue, Vanilla, jQuery, whatever),
            PHP, UI design, and CMS implementation and maintenance including Drupal, Wordpress, Squarespace, Shopify and more.
          </p>
        </div>
      </div>
      <div class="w-full bg-ah-900 my-8 p-12 sm:p-32">
        <div class="md:w-2/3 mx-auto text-white font-sans">
          <h2 class="text-xl uppercase font-bold">Get In Touch</h2>

          <!-- <img class="float-left pr-8" src="coat.gif" />       -->
          <p>
            Interested in hiring me for a project, or just want to talk about the internet? You can reach me via:
          </p>
          <ul>
            <li><a class="text-white border-white" href="mailto:ahyes.web@gmail.com">ahyes.web@gmail.com</a></li>
            <li><a class="text-white border-white" href="https://github.com/alexharris">Github</a></li>
            <li><a class="text-white border-white" href="https://www.linkedin.com/in/alex-harris-a7425b90/">Linked In</a></li>
          </ul>
<form name="contact" method="POST" data-netlify="true">
  <p>
    <label>Your Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
          
        </div>
      </div>
      <!-- <h2 class="text-xl uppercase font-bold ">Other Stuff</h2>
      <p>Here is some non-client work I have on the web:</p> -->
      <!-- <div class="flex flex-row flex-wrap">
        <div
          class="w-full sm:w-1/2 lg:w-1/3 sm:pr-4 sm:my-8"
        >

          <div class="p-4 flex flex-col justify-between">
            <h3 class="font-bold">Small Archives</h3>
            <p>
              Small Archives is a simple web platform for publishing collections
              of things.
            </p>
            <p>
              <a href="https://smallarchives.com">https://smallarchives.com</a>
            </p>
          </div>
        </div>
        <div
          class="w-full sm:w-1/2 lg:w-1/3 sm:px-2 sm:my-8"
        >
          <div class="p-4 flex flex-col justify-between">
            <h3 class="font-bold">Dither it!</h3>
            <p>
              Dither it! is a web app for dithering images, allowing for
              reduction in the number of colors used while still maintaining
              detail and depth.
            </p>
            <p><a href="https://ditherit.com">https://ditherit.com</a></p>
          </div>
        </div>
        <div
          class="w-full sm:w-1/2 lg:w-1/3 lg:pl-4 sm:my-8"
        >

          <div class="p-4 flex flex-col justify-between">
            <h3 class="font-bold">Vue Palette Builder</h3>
            <p>
              Vue Palette Builder is a generic version of the color palette
              selection tool that I built for Dither it!, ready for use in any
              Vue project using NPM.
            </p>
            <p>
              <a href="https://alexharris.github.io/vue-palette-builder/"
                >https://alexharris.github.io/vue-palette-builder</a
              >
            </p>
          </div>
        </div>
      </div> -->
    </section>
    <section v-if="currentRoute == '?p=capp'" class="w-full">
      <Capp />
    </section>
    <section v-if="currentRoute == '?p=bampfa'" class="w-full">
      <Bampfa />
    </section>
    <section v-if="currentRoute == '?p=obb'" class="w-full">
      <Obb />
    </section>
    <section v-if="currentRoute == '?p=alma'" class="w-full">
      <Alma />
    </section>
    <section v-if="currentRoute == '?p=oe'" class="w-full">
      <Oe />
    </section>
    <section v-if="currentRoute == '?p=pico'" class="w-full">
      <Pico />
    </section>
    <section v-if="currentRoute == '?p=kgf'" class="w-full">
      <Kgf />
    </section>    
    <section v-if="currentRoute == '?p=dither'" class="w-full">
      <Dither />
    </section>       
  </div>
</template>

<script>
// import HeaderAnimation from "./components/HeaderAnimation.vue";
import WorkItem from "./components/WorkItem.vue";
import Capp from "./components/Capp.vue";
import Bampfa from "./components/Bampfa.vue";
import Obb from "./components/Obb.vue";
import Alma from "./components/Alma.vue";
import Oe from "./components/Oe.vue";
import Pico from "./components/Pico.vue";
import Kgf from "./components/Kgf.vue";
import Dither from "./components/Dither.vue";

export default {
  name: "app",
  data: function() {
    return {
      content: "intro",
      currentRoute: window.location.search
    };
  },
  components: {
    // HeaderAnimation
    WorkItem,
    Capp,
    Bampfa,
    Obb,
    Alma,
    Oe,
    Pico,
    Kgf,
    Dither
  },
  methods: {
    bampfaHover() {
      this.bampfa = !this.bampfa;
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    itemSelected() {
      // eslint-disable-next-line no-console
      console.log('hello')
    }
  }
};
</script>
