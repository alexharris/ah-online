<template>
  <div id="app" class="gradient">
    <a
      v-if="currentRoute != '/'"
      class="m-4 fixed top-0 right-0 text-white cursor-pointer bg-ah-800 rounded-full w-16 h-16 flex justify-center items-center hover:bg-white hover:text-ah-800 hover:shadow-xl border-none"
      href="/"
      ><svg  aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" class="svg-inline--fa fa-times fa-w-11 h-8 w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
      </a>
    <section
      v-if="currentRoute == '/'"
      class="container px-8 w-full lg:w-4/5 mx-auto py-32"
    >
      <!-- <HeaderAnimation /> -->
      <h1>Alex Harris</h1>
      <h2>Web Development</h2>
      <p class="text-2xl w-full md:w-2/3 pb-8">
        I am a web developer in Oakland, CA with over 9 years of experience
        helping arts and education organizations, artists, non-profits and small
        businesses communicate on the web.
      </p>
      <h2 class="w-full pb-8">Work –</h2>
      <div class="flex flex-row flex-wrap pb-8">
        <WorkItem url="https://bampfa.org" title="BAMPFA" slug="bampfa" />
        <WorkItem url="/capp" title="500 Capp Street" slug="capp" />
        <WorkItem url="/obb" title="Other Brother Beer" slug="obb" />
        <WorkItem url="/alma" title="Alma and Friends" slug="alma" />
        <WorkItem url="/oe" title="Open Engagement" slug="oe" />
        <WorkItem url="/picoyune" title="Picoyune" slug="pico" />
      </div>
      <h2 class="w-full pb-8">Services –</h2>
      <p>
        I provide a wide range of development, consultation and training
        services.
      </p>
      <p>
        I try to be particularly attuned to how a particular solution might fit into an organization's technological capacity. I also provide training and documentation, with the goal of enabling individuals to be able to do feel comfortable with everyday use of their site for the long term.
      </p>
      <p>
        My proficiencies include: Working with other people (especially non-technical people), HTML, CSS/SCSS, JS (Vue, Vanilla, jQuery), PHP, and CMS implementation and maintenance including Drupal, Wordpress, Squarespace, Shopify and more.
      </p>
      <h2 class="w-full pb-8">Other Stuff –</h2>
      <p>I have also have some non-client projects that are online:</p>
      <ul>
        <li>
          <a href="https://ditherit.com">Dither it!</a> – An online tool for dithering images
        </li>
        <li>
          <a href="https://ditherit.com">Small Archives</a> – A small archival collections platform
        </li>
      </ul>
      <h2 class="w-full pb-8">Get in touch –</h2>
      <p>
        You can reach me via email at
        <a href="mailto:alex@alexharris.online">alex@alexharris.online</a> or
        find me on <a href="https://github.com/alexharris">Github</a> or
        <a href="https://www.linkedin.com/in/alex-harris-a7425b90/">Linked In</a
        >.
      </p>
    </section>
    <!-- <section v-if="currentRoute == '/bampfa'" class="container px-8 w-full lg:w-4/5 mx-auto">
        <Bampfa />
      </section>       -->
    <section
      v-if="currentRoute == '/capp'"
      class="w-full"
    >
      <Capp />
    </section>
    <section
      v-if="currentRoute == '/bampfa'"
      class="w-full"
    >
      <Bampfa />
    </section>
    <section
      v-if="currentRoute == '/obb'"
      class="w-full"
    >
      <Obb />
    </section>
    <section
      v-if="currentRoute == '/alma'"
      class="w-full"
    >
      <Alma />
    </section>
    <section
      v-if="currentRoute == '/oe'"
      class="w-full"
    >
      <Oe />
    </section>
    <section
      v-if="currentRoute == '/pico'"
      class="w-full"
    >
      <Pico />
    </section>

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
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
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
      currentRoute: window.location.pathname
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
    }
  }
};
</script>
