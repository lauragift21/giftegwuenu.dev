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
// import CarbonAds from "~/components/CarbonAds.vue";
export default {
  components: {
    PostMeta,
    PostTags,
    // CarbonAds
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
        imagePublicID: 'social_card_sp9khr',
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
