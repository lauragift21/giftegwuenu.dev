<template>
  <div class="header__right">
    <nav>
      <ul class="nav">
        <li>
          <g-link class="header__link" to="/about">About</g-link>
        </li>
        <!-- <li>
          <g-link class="header__link" to="/talks">Talks</g-link>
        </li> -->
        <!-- <li>
          <g-link class="header__link" to="/uses">Uses</g-link>
        </li> -->
      </ul>
    </nav>
    <ToggleTheme/>
  </div>
</template>

<script>
import ToggleTheme from "~/components/ToggleTheme.vue";

export default {
  components: {
    ToggleTheme
  }
};
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: var(--header-height);
  padding: 0 calc(var(--space) / 2);
  top: 0;
  z-index: 10;

  &__left,
  &__right {
    display: flex;
    align-items: center;
  }
  &__link {
    text-decoration: none;
    font-size: 21px;
  }
  .nav {
  display: flex;
  list-style: none;
  li {
    padding: 20px;
    margin-top: 30px;
  }
}
}
</style>
