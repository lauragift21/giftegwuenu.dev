<template>
  <header class="flex justify-between">
    <g-link class="no-marker" to="/">
      <g-image class="logo" src="../assets/img/logo.png" alt="logo" />
    </g-link>
    <nav>
      <g-link class="pr-7 font-black text-xl link" to="/#about">About</g-link>
      <g-link class="pr-7 font-black text-xl link" to="/speaking/">Speaking</g-link>
      <g-link class="pr-7 font-black text-xl link" to="/writing/">Writing</g-link>
      <g-link class="pr-7 font-black text-xl link" to="/#contact">Contact</g-link>
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
  padding-left: 180px;
}
</style>