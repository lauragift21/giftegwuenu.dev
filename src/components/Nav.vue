<template>
  <header class="flex justify-between sm:pt-5">
    <g-link to="/">
      <g-image class="logo" src="../assets/img/logo.png" alt="logo" />
    </g-link>
    <nav class="sm:flex sm:flex-col sm:-mx-10 md:flex md:flex-col md:-mx-10">
      <g-link class="mr-12 sm:-pr-3 font-black text-xl sm:text-base link" to="/#about">About</g-link>
      <g-link class="mr-12 sm:-pr-3  font-black text-xl sm:text-base link" to="/speaking/">Speaking</g-link>
      <g-link class="mr-12 sm:-pr-3  font-black text-xl sm:text-base link" to="/writing/">Writing</g-link>
      <g-link class="mr-12 sm:-pr-3  font-black text-xl sm:text-base link" to="/uses/">Uses</g-link>
      <g-link class="mr-6 sm:-pr-3  font-black text-xl sm:text-base link" to="/#contact">Contact</g-link>
      <toggle-theme />
    </nav>
  </header>
</template>

<script>
import ToggleTheme from './ToogleTheme';
export default {
  components: {
    ToggleTheme
  }
}
</script>

<style scoped>

header {
  margin: 0 auto;
}

.logo {
  display: block;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  background: var(--logo);
  background-size: 60px;
  height: 80px; 
  padding-left: 100px;
}
</style>