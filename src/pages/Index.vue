<template>
  <Layout>
    <Hero />
    <About />
    <Latest />
    <Footer />
  </Layout>
</template>

<script>
import Hero from '~/components/Hero.vue'
import About from '~/components/About.vue'
import Footer from '~/components/Footer.vue'
import Latest from '~/components/Latest.vue'
export default {
  components: {
    Hero,
    About,
    Latest,
    Footer
  },
  metaInfo: {
    title: 'Gift Egwuenu'
  }
}
</script>

<style>
</style>
