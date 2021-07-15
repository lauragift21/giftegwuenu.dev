<template>
  <Layout>
    <Hero />
    <!-- <About /> -->
    <Latest />
    <Footer />
  </Layout>
</template>

<script>
import Hero from '~/components/Hero.vue'
import Footer from '~/components/Footer.vue'
import Latest from '~/components/Latest.vue'
export default {
  components: {
    Hero,
    Latest,
    Footer
  },
  metaInfo: {
    title: 'Home',
    meta: [
      { name: 'title', content: 'Home' }
    ],
  }
}
</script>
