<template>
  <Layout>
    <div class="post-title">
      <h1 class="post-title__text">{{ $page.post.title }}</h1>
      <PostMeta :post="$page.post"/>
    </div>

    <div class="post__flex">
      <div id="carbonads"></div>
      <div class="post content-boxs">
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
      script: [
        {
          src:
            "https://cdn.carbonads.com/carbon.js?serve=CE7DV2J7&placement=wwwgiftegwuenucom",
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

#carbonads {
  position: relative;
  display: flex;
  width: 300px;
  height: 250px;
  background-color: #fff;
  box-shadow: inset 0 0 1px 1px hsla(0, 0%, 0%, 0.15);
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial,
    sans-serif;

  justify-content: center;
  align-items: center;
}

#carbonads a {
  color: #111;
  text-decoration: none;
}

#carbonads a:hover {
  color: #111;
}

#carbonads span {
  display: block;
  overflow: hidden;
}

.carbon-img {
  display: block;
  margin: 0 0 8px;
  line-height: 1;
}

.carbon-img img {
  max-width: 150px !important;
  width: 150px;
  height: auto;
}

.carbon-text {
  display: block;
  margin-bottom: 8px;
  padding: 0 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.35;
}

.carbon-poweredby {
  position: absolute;
  right: 10px;
  bottom: 10px;
  display: block;
  padding: 5px 6px;
  border-radius: 2.5px;
  background-color: hsl(246, 93%, 69%);
  color: #fff !important;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 600;
  font-size: 8px;
  line-height: 1;
}

@media only screen and (min-width: 320px) and (max-width: 800px) {
  .post {
    &__flex {
      display: flex;
      flex-direction: column-reverse;
    }
  }
  .content-boxs {
    margin: 0 !important;
  }
  #carbonads {
    text-align: center;
  }
}

@media only screen and (min-width: 1650px) {
  .content-boxs {
    margin-left: 6em;
  }
  #carbonads {
    margin-right: -9em;
  }
}
</style>