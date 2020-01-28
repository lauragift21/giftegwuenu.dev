<template>
    <nav class="learn">
      <ul class="nav">
        <li>
          <ToggleTheme/>
        </li>
        <li>
          <g-link class="header__link" to="/">Home</g-link>
        </li>
      </ul>
    </nav>
</template>

<script>
import ToggleTheme from "~/components/ToggleTheme.vue";

  export default {
    components: {
      ToggleTheme
    }
  }
</script>

<style lang="scss" scoped>
  .learn {
    min-height: 100vh;
  }
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
</style>