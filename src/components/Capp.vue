<template>
  <Single id="capp">
    <h1 class="w-full pb-16 text-center">500 Capp Street</h1>
    <div class="w-full flex flex-col md:flex-row flex-wrap p-4 lg:p-8 mb-8 border border-ah-800 items-center">
      <div class="w-full md:w-1/2 p-4 self-start flex justify-center">
        <img src="capp-logo.png" />
      </div>
      <div class="w-full md:w-1/2 p-4">
        <p>
          The staff at 500 Capp Street were having some difficulty using
          Wordpress to manage their content and keep their site up to date.
          After an initial audit, I determined that there were security
          vulnerabilities, incorrect template structures, plugin bloat, and out
          of date software, along with a lack of training and documentation.
          There were also budget and timeline concerns, so I would have to be
          judicious when deciding what needed immediate attention, and what
          could be deferred.
        </p>
        <p>
          Site: <a href="https://500cappstreet.org"> https://500cappstreet.org</a>
        </p>
      </div>
    </div>
    <img src="capp/500-capp-street-exhibition.jpg" />

    <h2 class="text-center w-full">Process</h2>
    <div class="w-full flex flex-col md:flex-row flex-wrap">
      <div class="w-full md:w-1/2 p-4">
        <h3>1. Security and Backups</h3>
        <p>
          The first step in working with any existing site or codebase is fixing
          any immediately obvious security concerns, and then implementing
          backups or confirming the viability of existing backups. After doing
          this, I audited the site for unecessary plugins, removed them, and
          then updated the core Wordpress software and all remaining plugins.
        </p>
      </div>
      <div class="w-full md:w-1/2 p-4">
        <h3>2. Template Fixes</h3>
        <p>
          With the site backed up and secure, I proceeded with reimplementing
          the templates to correctly use Wordpress "post" and "page" content as
          intended. I also resolved a variety of minor structural and style
          issues.
        </p>
      </div>
      <div class="w-full md:w-1/2 p-4">
        <h3>3. Content Migration</h3>
        <p>
          Once the new templates were in place, and Wordpress was updated to the
          new Gutenberg editor, the content was ready to be migrated. It was not
          enough content to justify writing a migration script, so I manually
          converted all the old content to the correct new types.
        </p>
      </div>
      <div class="w-full md:w-1/2 p-4">
        <h3>4. Documentation and Training</h3>
        <p>
          Finally, I created a series of video tutorials on how to accomplish
          specific tasks that will be important for enabling the staff to manage
          their own content. I recommended this method rather than in-person
          training session, since the team will be able to revisit the tutorials
          as needed in the future. These tutorials include topics such as basic
          Wordpress usage, creating galleries, creating buttons, and more.
        </p>
      </div>
    </div>
    <img class="pb-8" src="capp/500-capp-street-exh-list.jpg" />

    <h2 class="w-full text-center">Outcome</h2>

    <p class="pb-8">
      The outcome of this was an updated, secure site and a staff trained how to
      use it. The changes made should help to keep this website functioning
      well, with regular minor maintenance, for the foreseeable future.
    </p>
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
