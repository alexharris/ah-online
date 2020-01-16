<template>
  <Single id="capp" casestudy="true">
    <h1 class="w-full pb-4 text-xl uppercase font-bold">500 Capp Street</h1>
    <p>
      <a href="https://500cappstreet.org"> https://500cappstreet.org</a>
    </p>
    <p>
      The staff at 500 Capp Street were having some difficulty using Wordpress
      to manage their content and keep their site up to date. After an initial
      audit, I determined that there were security vulnerabilities, incorrect
      template structures, plugin bloat, and out of date software, along with a
      lack of training and documentation. There were also budget and timeline
      concerns, so I would have to be judicious when deciding what needed
      immediate attention, and what could be deferred.
    </p>

    <h2 class="w-full pb-4 text-xl uppercase font-bold">Process</h2>

    <h3>1. Security and Backups</h3>
    <p>
      The first step in working with any existing site or codebase is fixing any
      immediately obvious security concerns, and then implementing backups or
      confirming the viability of existing backups. After doing this, I audited
      the site for unecessary plugins, removed them, and then updated the core
      Wordpress software and all remaining plugins.
    </p>

    <h3>2. Template Fixes</h3>
    <p>
      With the site backed up and secure, I proceeded with reimplementing the
      templates to correctly use Wordpress "post" and "page" content as
      intended. I also resolved a variety of minor structural and style issues.
    </p>

    <h3>3. Content Migration</h3>
    <p>
      Once the new templates were in place, and Wordpress was updated to the new
      Gutenberg editor, the content was ready to be migrated. It was not enough
      content to justify writing a migration script, so I manually converted all
      the old content to the correct new types.
    </p>

    <h3>4. Documentation and Training</h3>
    <p>
      Finally, I created a series of video tutorials on how to accomplish
      specific tasks that will be important for enabling the staff to manage
      their own content. I recommended this method rather than in-person
      training session, since the team will be able to revisit the tutorials as
      needed in the future. These tutorials include topics such as basic
      Wordpress usage, creating galleries, creating buttons, and more.
    </p>

    <h2 class="w-full pb-4 text-xl uppercase font-bold">Outcome</h2>

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
