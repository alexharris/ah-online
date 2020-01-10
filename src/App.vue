<template>
  <div id="app" class="gradient">
    <a
      v-if="currentRoute != ''"
      class="m-4 fixed top-0 right-0 text-white cursor-pointer bg-ah-800 rounded-full w-16 h-16 flex justify-center items-center hover:bg-white hover:text-ah-800 hover:shadow-xl border-none"
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
    <section
      v-if="currentRoute == ''"
      class="px-8 w-full py-32 px-8"
    >
      <!-- <HeaderAnimation /> -->
      <h1>Alex Harris</h1>
      <h3>Web Development</h3>
      <p class="text-xl w-full md:w-2/3 pb-8">
        I am a web developer in Oakland, CA with over 9 years of experience
        helping arts and education organizations, artists, non-profits and small
        businesses communicate on the web.
      </p>
      <h2 class="w-full pb-8">Work –</h2>
      <div class="flex flex-row flex-wrap pb-8">
        <WorkItem url="/bampfa" title="BAMPFA" slug="bampfa" />
        <WorkItem
          url="/capp"
          title="500 Capp Street"
          slug="capp"
          casestudy="true"
        />
        <WorkItem url="/obb" title="Other Brother Beer" slug="obb" />
        <WorkItem url="/alma" title="Alma and Friends" slug="alma" />
        <WorkItem url="/oe" title="Open Engagement" slug="oe" />
        <WorkItem url="/picoyune" title="Picoyune" slug="pico" />
      </div>
      <h2 class="w-full pb-8">Services –</h2>
      <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-1/2 pl-0 px-4">
          <p>
            I provide a wide range of development, consultation and training
            services.
          </p>
          <p>
            I try to be particularly attuned to how a particular solution might
            fit into an organization's technological capacity. I also provide
            training and documentation, with the goal of enabling individuals to
            be able to do feel comfortable with everyday use of their site for
            the long term.
          </p>
        </div>
        <div class="w-full md:w-1/2 pl-0 md:pl-4 px-4">
          <p>
            My proficiencies include: Working with other people (especially
            non-technical people), HTML, CSS/SCSS, JS (Vue, Vanilla, jQuery),
            PHP, and CMS implementation and maintenance including Drupal,
            Wordpress, Squarespace, Shopify and more.
          </p>
        </div>
      </div>
      <div class="border border-ah-800 p-4 my-16 shadow border-ah-800">
        <h2 class="w-full pb-8">Get in touch –</h2>

        <!-- <img class="float-left pr-8" src="coat.gif" />       -->
        <p>
          Interesting in hiring me for a project, or just want to talk about the
          internet? You can reach me via email at
          <a
            href="mailto:alex@alexharris.online"
            >alex@alexharris.online</a
          >
          or find me on
          <a
            href="https://github.com/alexharris"
            >Github</a
          >
          or
          <a
            href="https://www.linkedin.com/in/alex-harris-a7425b90/"
            >Linked In</a
          >.
        </p>
      </div>
      <h2 class="w-full pb-8">Other Stuff –</h2>
      <p>Here is some non-client work I have on the web:</p>
      <div class="flex flex-row flex-wrap">
        <div
          class="w-full sm:w-1/2 lg:w-1/3 sm:pr-4 sm:my-8"
        >
          <a class="self-center" href="https://smallarchives.com">
            <img src="smallarchives-thumb.jpg" />
          </a>
          <div class="p-4 flex flex-col justify-between">
            <h3>Small Archives</h3>
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
          <a href="https://ditherit.com"> <img src="ditherit-thumb.jpg"/></a>
          <div class="p-4 flex flex-col justify-between">
            <h3>Dither it!</h3>
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
          <a href="https://alexharris.github.io/vue-palette-builder/">
            <img src="vue-palette-builder-thumb.jpg"
          /></a>
          <div class="p-4 flex flex-col justify-between">
            <h3>Vue Palette Builder</h3>
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
      </div>
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
    Pico
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
