<template>
  <div id="app">
    <a class="skip" href="#main">Skip to main content</a>
    <header class="header">
      <div class="header__left">
        <Logo v-if="showLogo"/>
      </div>
      <Nav/>
    </header>

    <transition name="fade" appear>
      <main class="main">
        <slot/>
      </main>
    </transition>

    <footer class="footer">
      <span class="footer__copyright">Copyright © {{ new Date().getFullYear() }}.</span>
      <span>
        Made with 💚 by
        <a href="//twitter.com/lauragift21">@lauragift21</a>
      </span>
      <span class="footer__links">
        Powered by
        <a href="//gridsome.org">Gridsome</a>
      </span>
    </footer>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import Nav from "~/components/Nav.vue";
import ToggleTheme from "~/components/ToggleTheme.vue";

export default {
  props: {
    showLogo: { default: true }
  },
  components: {
    Logo,
    Nav,
    ToggleTheme
  },
  metaInfo() {
    return {
      script: [{ src: "https://platform.twitter.com/widgets.js", async: true }]
    }
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

  @media screen and (min-width: 1300px) {
    //Make header sticky for large screens
    // position: sticky;
    width: 100%;
  }
}

.skip {
  position: absolute;
  left: -999em;
}

.skip:active,
.skip:focus {
  left: -0em;
}

.main {
  margin: 0 auto;
  padding: 1.5vw 15px 0;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: calc(var(--space) / 2);
  text-align: center;
  font-size: 0.8em;

  > span {
    margin: 0 0.35em;
  }

  a {
    color: currentColor;
  }
}
.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-enter {
  opacity: 0;
}
</style>
