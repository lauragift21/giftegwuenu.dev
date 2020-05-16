<template>
  <Layout class="w-full">
    <div class="mx-auto">
      <div class="text-center mx-auto" id="main"> 
        <h1 class="text-4xl sm:text-2xl md:text-4xl font-semibold">{{ $page.post.title }}</h1>
        <!-- TODO: quick pass of implementing digital garden -->
        <!-- <span class="text-lg font-normal">{{ $page.post.date }}</span> -->
        <PostTags :post="$page.post"/>
      </div>
      <div class="mx-auto w-2/3 sm:mx-auto sm:w-10/12 md:mx-auto md:w-11/12 xs:mx-auto">
        <p class="lead" v-html="$page.post.excerpt"/>
        <div class="markdown" v-html="$page.post.content"/>
        <br>
      <g-link to="/writing" class="inline rounded px-3 py-2 text-lg"> View All Posts 🔖 </g-link>
      <hr class="line w-3/4 mx-auto my-8">
      <newsletter></newsletter>
      <hr class="line w-3/4 mx-auto my-8">
      <author></author>
      <!-- comment goes here -->
      <!-- <vue-disqus class="mx-auto w-2/3" shortname="giftegwuenu" :identifier="$page.post.title"></vue-disqus> -->
      </div>
    </div>
</Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    path
    date (format: "D MMMM YYYY")
    timeToRead
    tags {
      id
      title
    }
    description
    content
  }
}
</page-query>

<script>
import getShareImage from '@jlengstorf/get-share-image';
import PostMeta from "~/components/PostMeta";
import PostTags from "~/components/PostTags";
import Newsletter from "~/components/Newsletter.vue";
import Author from "~/components/Author.vue";
export default {
  components: {
    PostMeta,
    PostTags,
    Newsletter,
    Author
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: this.$page.post.title,
          content: this.$page.post.description
        },
        //twitter card: https://cards-dev.twitter.com/validator
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: this.getImage() },
        { name: "twitter:description", content: this.$page.post.description },
        { name: "twitter:title", content: this.$page.post.title },
        { name: "twitter:site", content: "@lauragift_" },
        { name: "twitter:creator", content: "@lauragift_" },
        // open graph
        { property: "og:title", content: this.$page.post.title },
        { property: "og:description", content: this.$page.post.description },
        { property: "og:image", content: this.getImage() },
        { property: "og:updated_time", content: this.$page.post.date },
      ],
    };
  },
  mounted() {
    this.getImage();
  },
  methods: {
    getImage() {
      const socialImage = getShareImage({
        title: this.$page.post.title,
        tagline: 'giftegwuenu.com',
        cloudName: 'lauragift',
        imagePublicID: 'social_cards_x3icte',
        titleFont: 'futura',
        taglineFont: 'futura',
        titleFontSize: 72,
        textColor: '232129',
      });
      return socialImage;
    }
  }
};
</script>

<style lang="scss" scoped>
#disqus_thread {
  color: var(--title-color);
}

.line {
  border: 1px dashed var(--title-color);
}

 a {
  color: var(--link-color);
  background:
     linear-gradient(
       to bottom, var(--link-accent-color) 0%,
       var(--link-accent-color) 100%
     );
}
</style>