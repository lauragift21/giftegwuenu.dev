<template>
  <p class="author text-xl border-black border-4 rounded p-6 pb-3">
    Hello! 👋
    I’m Gift, a Frontend Engineer passionate about making the web accessible to everyone and building communities.
    I write content on HTML, CSS, Jamstack, Accessibility, and Career related topics.
    <br>
    <br>
    If you find this article helpful consider sharing this post, connecting with me on <a href="https://twitter.com/lauragift_" target="_blank" rel="noopener">Twitter</a> or becoming a <a href="https://patreon.com/lauragift21" target="_blank" rel="noopener">Patron</a>.
  </p>
</template>

<style lang="scss" scoped>
.author {
  margin: 0 auto;
  max-width: 730px;
  border-color: var(--dark-pink);
}

a {
  color: var(--link-color);
  background:
     linear-gradient(
       to bottom, var(--link-accent-color) 0%,
       var(--link-accent-color) 100%
     );
  background-position: 0 100%;
  background-repeat: repeat-x;
  background-size: 4px 4px;
  transition: background-size .5s;
}

a:hover {
  background: var(--link-accent-color);
  color: var(--link-color);
  background-size: 4px 50px;
}
</style>