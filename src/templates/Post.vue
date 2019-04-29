<template>
  <Layout>
    <div class="post-title">
      <h1 class="post-title__text">{{ $page.post.title }}</h1>
      <PostMeta :post="$page.post"/>
    </div>

    <div class="post__flex">
      <div id="codefund"></div>
      <div class="post content-box">
        <div class="post__header">
          <g-image alt="Cover image" v-if="$page.post.coverImage" :src="$page.post.coverImage"/>
        </div>

        <div class="post__content" v-html="$page.post.content"/>

        <div class="post__footer">
          <PostTags :post="$page.post"/>
        </div>
        <div class="post-comments">
          <!-- Add comment widgets here -->
        </div>
      </div>
      <br>
    </div>
    <!-- Add newsletter form -->
    <Newsletter class="post-newsletter"/>
    <Author class="post-author"/>
  </Layout>
</template>

<script>
import PostMeta from "~/components/PostMeta";
import PostTags from "~/components/PostTags";
import Author from "~/components/Author.vue";
import Newsletter from "~/components/Newsletter.vue";

export default {
  components: {
    Author,
    PostMeta,
    PostTags,
    Newsletter
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: "description",
          content: this.$page.post.description
        },
        //twitter card: https://cards-dev.twitter.com/validator
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:description", content: this.$page.post.description },
        { name: "twitter:title", content: this.$page.post.title },
        { name: "twitter:site", content: "@lauragift21" },
        { name: "twitter:creator", content: "@lauragift21" },
        // open graph
        { property: "og:updated_time", content: this.$page.post.date }
      ],
      script: [{ src: "https://platform.twitter.com/widgets.js", async: true }],
      script: [
        {
          src:
            "https://codefund.app/properties/264/funder.js/?template=image-only&theme=light",
          async: true
        }
      ]
    };
  }
};
</script>

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
      path
    }
    description
    content
  }
}
</page-query>

<style lang="scss">
.post-title {
  padding: calc(var(--space) / 2) 0 calc(var(--space) / 2);
  text-align: center;
}

.post {
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

  &__flex {
    display: grid;
    grid-template-columns: 22% 60%;
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

@media only screen and (max-width: 650px) {
  .post {
    &__flex {
      display: flex;
      flex-direction: column-reverse;
    }
  }
  .content-box {
    margin-left: 0;
  }
}

@media only screen and (min-width: 1650px) {
  .content-box {
    margin-left: 6em;
  }
  #codefund {
    margin-right: -9em;
  }
}
</style>