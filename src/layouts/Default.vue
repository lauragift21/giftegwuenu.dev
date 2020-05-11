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
  }
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

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
  font-size: 20px;
  margin: 10px 20px;
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
  transition: transform .3s ease-in-out;
}

.link:hover::before {
  transform: scaleX(1);
  transform-origin: center left;
}

@media screen and (max-width: 800px) {
  .layout {
    padding-top: 0;
  } 
}
</style>
