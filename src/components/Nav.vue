<template>
  <header class="flex justify-between">
    <g-link class="no-marker" to="/">
      <g-image src="~/assets/img/logo.png" width="70" />
    </g-link>
    <nav>
      <g-link class="pr-7 font-black text-xl link" to="/#about">About</g-link>
      <g-link class="pr-7 font-black text-xl link" to="/writing">Writing</g-link>
      <g-link class="pr-7 font-black text-xl link" to="/speaking">Speaking</g-link>
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
</style>