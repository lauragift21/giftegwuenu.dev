<template>
  <section
    id="main"
    data-aos="fade-up"
    class="hero flex md:flex-wrap w-full xs:px-5 xs:flex-col-reverse sm:flex-col-reverse"
  >
    <div class="tagline flex-1 mt-40 xs:text-center sm:text-center p-2 xs:mt-1 sm:mt-1">
      <h1 class="text-6xl font-semibold">Hello I'm Gift Egwuenu</h1>
      <p class="text-2xl">I’m a frontend engineer and technical writer based in Lagos Nigeria.</p>
      <div class="my-6 text-white">
        <abbr title="Twitter" class="pr-5 text-2xl font-semibold hover:text-pink-300">
          <a href="https://twitter.com/lauragift_" target="_blank">TW</a>
        </abbr>
        <abbr title="GitHub" class="pr-5 text-2xl font-semibold hover:text-pink-300">
          <a href="https://github.com/lauragift21" target="_blank">GH</a>
        </abbr>
        <abbr title="Instagram" class="pr-5 text-2xl font-semibold hover:text-pink-300">
          <a href="https://instagram.com/lauragift_" target="_blank">IG</a>
        </abbr>
        <abbr title="LinkedIn" class="pr-5 text-2xl font-semibold hover:text-pink-300">
          <a href="https://www.linkedin.com/in/egwuenugift" target="_blank">LI</a>
        </abbr>
        <abbr title="Dev" class="text-2xl font-semibold hover:text-pink-300">
          <a href="https://dev.to/lauragift21" target="_blank">DV</a>
        </abbr>
      </div>
    </div>
    <div class="profile xs:mx-auto sm:mx-auto -mx-10">
      <g-image src="../assets/img/giftegwuenu.svg" class="rounded-full bio" />
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.hero {
  margin: 0 auto;
  padding-bottom: 10rem;
}
abbr {
  text-decoration: none !important;
  color: var(--text-color);
}
h1 {
  -webkit-transition: width 200ms ease-in-out;
  transition: width 200ms ease-in-out;
}
.profile {
  margin-top: 10rem;
}

.bio {
  border: 4px dotted #fa709a;
}
</style>