<template>
  <section
    id="main"
    data-aos="fade-up"
    class="hero pb-16 sm:pb-4 flex md:flex-wrap w-full xs:px-5 xs:flex-col-reverse sm:flex-col-reverse"
  >
    <div class="tagline flex-1 mt-40 sm-px-6 xs:text-center sm:text-center p-2 xs:mt-1 sm:mt-0">
      <h1 class="text-6xl font-semibold">Hello I'm Gift Egwuenu</h1>
      <p class="text-2xl">I’m a developer advocate and content creator based in the Netherlands.</p>
      <div class="my-6 text-white">
        <abbr title="Twitter" class="pr-5 text-2xl font-semibold hover:text-pink-300">
          <a href="https://twitter.com/lauragift_" target="_blank" rel="noopener">TW</a>
        </abbr>
        <abbr title="GitHub" class="pr-5 text-2xl font-semibold hover:text-pink-300">
          <a href="https://github.com/lauragift21" target="_blank" rel="noopener">GH</a>
        </abbr>
        <abbr title="Instagram" class="pr-5 text-2xl font-semibold hover:text-pink-300">
          <a href="https://instagram.com/lauragift_" target="_blank" rel="noopener">IG</a>
        </abbr>
        <abbr title="LinkedIn" class="pr-5 text-2xl font-semibold hover:text-pink-300">
          <a href="https://www.linkedin.com/in/egwuenugift" target="_blank" rel="noopener">LI</a>
        </abbr>
        <abbr title="Dev" class="text-2xl pr-5 font-semibold hover:text-pink-300">
          <a href="https://dev.to/lauragift21" target="_blank" rel="noopener">DV</a>
        </abbr>
        <abbr title="YouTube" class="text-2xl font-semibold hover:text-pink-300">
          <a href="https://www.youtube.com/channel/UCgUgg53iJX1pdabUxpkgozA" target="_blank" rel="noopener">YT</a>
        </abbr>
      </div>
    </div>
    <div class="profile mt-24 sm:mt-6 sm:px-12 md:mx-auto xs:px-6 xs:mx-auto">
      <g-image src="../assets/img/gift_transparent.svg" class="rounded-full bio" alt="Gift's headshot" />
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.hero {
  margin: 0 auto;
}
abbr {
  text-decoration: none !important;
  color: var(--text-color);
}
h1 {
  -webkit-transition: width 200ms ease-in-out;
  transition: width 200ms ease-in-out;
}

.bio {
  border: 8px dotted #fa709a;
}
</style>
