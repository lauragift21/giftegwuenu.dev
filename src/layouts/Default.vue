<template>
  <div class="layout">
    <a class="skip" href="#main" >Skip to Content</a>
    <Nav />
    <slot />
  </div>
</template>

<script>
import Nav from '~/components/Nav.vue'

export default {
  components: {
    Nav
  },
  mounted() {
    let twitterScript = document.createElement('script')
    twitterScript.async = true;
    twitterScript.setAttribute('src', 'https://platform.twitter.com/widgets.js')
    document.head.appendChild(twitterScript)
    
    let codepenScript = document.createElement('script')
    codepenScript.async = true;
    codepenScript.setAttribute('src', 'https://static.codepen.io/assets/embed/ei.js')
    document.head.appendChild(codepenScript)
  }
}
</script>

<style>
.layout {
  padding-top: 40px;
  padding-bottom: 50px;
}

.skip {
  position: absolute;
  left: -999em;
  top: -999em;
}

.skip:active, 
.skip:focus, 
.skip:hover {
  left: 1em;
  top: 1em;
}

.link {
  text-decoration: none;
  position: relative;
  font-weight: 700;
  cursor: pointer;
  color: var(--link-color);
}

.link::before {
  content: '';
  position: absolute;
  top: 1.15rem;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  transform: scaleX(0);
  background: var(--pink-color);
  transform-origin: center right;
  transition: transform .2s ease-in;
}

.link:hover::before {
  transform: scaleX(1);
  transform-origin: center left;
}

@media screen and (max-width: 900px) {
  .layout {
    padding-top: 20px;
  } 
  .link:hover {
    color: var(--pink-color) !important;
    box-shadow: none;
  }

  .link:hover::before {
    transform: scaleX(0);
  }
}
</style>
