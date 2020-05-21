<template>
  <div class="post-card rounded-md mx-4 sm:mx-4 px-8 py-6 transform hover:-translate-y-1" :class="{'post-card--has-poster' : post.poster}">
    <g-link class="font-medium" :to="post.path">
      <h1 class="text-xl font-extrabold" v-html="post.title" />
      <p class="text-base font-medium py-3" v-html="post.description" />
      <PostMeta class="font-bold mb-4" :post="post" />
      <!-- <g-link class="font-medium flex justify-end" :to="post.path">
          <span class="bg-pink-600 text-black hover:font-semibold rounded px-2 py-1">Read More</span>
      </g-link> -->
    </g-link>
  </div>
</template>

<script>
import PostMeta from "~/components/PostMeta";
export default {
  components: {
    PostMeta,
  },
  props: ["post"]
};
</script>


<style lang="scss">
.post-card {
  background: var(--secondary-color);
  margin-bottom: var(--space);
  position: relative;
  box-shadow: 1px 10px 10px 0 rgba(0, 0, 0, 0.1);
}
</style>