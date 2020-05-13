<template>
  <Layout>
    <div class="text-center" id="main"> 
      <h1 class="text-5xl sm:text-2xl md:text-4xl font-semibold">{{ $page.post.title }}</h1>
      <span class="text-lg font-normal">{{ $page.post.date }}</span>
      <PostTags :post="$page.post"/>
    </div>
    <div class="mx-48 sm:mx-10 md:mx-30 xs:mx-auto">
      <p class="lead" v-html="$page.post.excerpt"/>
      <div class="markdown" v-html="$page.post.content"/>
    </div>
    <hr class="line w-1/2 mx-auto my-10">
    <!-- newsletter component -->
    <newsletter></newsletter>
    <hr class="line w-1/2 mx-auto my-10">
    <author></author>
    <!-- comment goes here -->
    <!-- <vue-disqus class="mx-auto w-2/3" shortname="giftegwuenu" :identifier="$page.post.title"></vue-disqus> -->
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
        { name: "twitter:site", content: "@lauragift21" },
        { name: "twitter:creator", content: "@lauragift21" },
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
</style>