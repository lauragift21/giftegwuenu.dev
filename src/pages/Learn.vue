<template>
  <div class="learn">
    <nav>
      <ul class="nav">
        <li>
          <ToggleTheme/>
        </li>
        <li>
          <g-link class="header__link" to="/">Home</g-link>
        </li>
      </ul>
    </nav>
    <div class="content" v-html="$page.learn.content"></div>
  </div>
</template>

<script>
import ToggleTheme from "~/components/ToggleTheme.vue";

  export default {
    components: {
      ToggleTheme
    }
  }
</script>

<page-query>
  query {
    learn(path: "/content/pages/learn") {
      excerpt
      date
      id
      title
      content
    }
  }
</page-query>

<style lang="scss">
  .learn {
    min-height: 100vh;
    margin: 0 auto;
    .nav {
      display: flex;
      flex-direction: row-reverse;
      list-style: none;
    li {
      padding: 20px;
      margin-top: 30px;
    }
  }
  .links {
    margin-top: 0.9em;
    a {
      margin: 0 0.5em;
    }
  }
  .content {
    margin: 0 auto;
    max-width: 750px;
    ul {
      list-style: none !important;
      margin: 0 auto;
    }
  }
}
</style>