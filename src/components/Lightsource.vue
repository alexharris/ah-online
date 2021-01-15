<template>
  <Single id="lightsource" casestudy="true">
    <h1 class="w-full pb-4 text-xl uppercase font-bold">Lightsource</h1>
    <p>
      <a href="https://lightsourcesf.com">https://lightsourcesf.com</a>
    </p>
    <p>
      I was brought on by <a href="https://www.paladarstudio.com/">Paladar Studio</a> to lead the web development effort for San Francisco fine art printing company Lightsource's new website and online store. This included a full rebrand and a new from-scratch Wordpress site, with custom e-commerce functionality built on top of WooCommerce.
    </p>

    <h2 class="w-full pb-4 text-xl uppercase font-bold">Wordpress Theme</h2>

    <p>
      The new site has a fully custom Wordpress theme built using the Tailwind CSS framework. The outcome is a beautiful and meticulous fully responsive theme that looks great on any screen and is easy to update over time.
    </p>
    <h3>Custom Components</h3>
    <p>
      Wordpress' new Gutenberg editor has been a revelation in how it allows users to create beautiful and complex content. Rather than just implementing the designs as static pages, we implemented each unique design aspect as a custom Gutenberg block, easily accessible within the Wordpress page editor. As the site continues to grow and evolve over time, these custom components are available for re-use and will allow the site to continue to look as great as it did on day one.
    </p>    

    <h3>Robust Infrastructure</h3>
    <p>
      The site is hosted by <a href="https://pantheon.io/">Pantheon</a>, which provides tools such as dev/test/live staging sites, continuous backups, and easy Wordpress updates that ensure the site will be safe, fast, and easy to update.
    </p>

    <h2 class="w-full pb-4 text-xl uppercase font-bold">E-Commerce</h2>

    <p class="pb-8">
      Another aspect of this site build was a full e-commerce experience to allow users to purchase Lightsource's services, including custom prints, directly from the site. This included heavy customization of standard WooCommerce functionality.
    </p>
    <h3>WooCommerce</h3>
    <p>The site prominently features WooCommerce to provide a robust e-commerce solution. Complex customizations were made, as well as use of the large community of available WooCommerce plugins to help create the correct system to satisfy some rather unusual business requirements.</p>
    <h3>File Uploads</h3>
    <p>One primary piece of functionality needed for the e-commerce aspect of the site was the ability for users to upload images and attach them to orders. There are existing Wordpress plugins that do this, but none of them provided the full range of functionality that Lightsource needed. Eventually, a solution was found using <a href="https://uploadcare.com/">Uploadcare</a>. I implemented a fully customized integration between Uploadcare and WooCommerce that allows users to upload large images and crop them according to product specifications.</p>
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
