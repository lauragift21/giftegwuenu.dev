<template>
  <Layout>
    <div class="post-title">
      <h1 class="post-title__text text-4xl font-semibold">{{ $page.post.title }}</h1>
      <h1 class="post-title__text text-lg font-normal">{{ $page.post.date }}</h1>
    </div>
    <div class="post w-2/3">
      <div class="post__content" v-html="$page.post.content"/>
      <div class="post__footer">
        <PostTags :post="$page.post"/>
      </div>
      <!-- <div class="post-comments"> -->
        <!-- Add comment widgets here -->
      <!-- </div> -->
    </div>
</Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    path
    date (format: "D. MMMM YYYY")
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

<style lang="scss">
.post-title {
  padding: calc(var(--space) / 2) 0 calc(var(--space) / 2);
  text-align: center;
}
.post {
  margin: 0 auto;
  &__header {
    width: calc(100% + var(--space) * 2);
    margin-left: calc(var(--space) * -1);
    margin-top: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;
    img {
      width: 100%;
    }
    &:empty {
      display: none;
    }
  }
  &__content {
    h2:first-child {
      margin-top: 0;
    }
    p:first-of-type {
      font-size: 1.2em;
      color: var(--title-color);
    }
    img {
      width: calc(100% + var(--space) * 2);
      margin-left: calc(var(--space) * -1);
      display: block;
      max-width: none;
    }
  }
}
.post-comments {
  padding: calc(var(--space) / 2);
  &:empty {
    display: none;
  }
}
.post-author {
  margin-top: calc(var(--space) / 2);
}
.post-newsletter {
  padding: 0;
}
@media only screen and (min-width: 320px) and (max-width: 800px) {
  .post {
    &__flex {
      display: flex;
      flex-direction: column-reverse;
    }
  }
  .content-boxs {
    // margin: 0 !important;
  }
}
@media only screen and (min-width: 1650px) {
  .content-boxs {
    margin-left: 6em;
  }
}
</style>