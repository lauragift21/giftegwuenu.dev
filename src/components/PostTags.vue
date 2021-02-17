<template>
  <div class="post-tags text-center pt-4">
    <span
      class="post-tags text-lg font-bold px-1"
      v-for="tag in post.tags"
      :key="tag.id"
      :to="tag.path"
    >
      <span class="text-md bg-black text-white rounded px-3 py-2">
        {{ tag.title }}
      </span>
    </span>
  </div>
</template>

<script>
export default {
  props: ["post"],
};
</script>

<style lang="scss">
.post-tags {
  margin: 1em 0 0;
  color: currentColor;
  &__link {
    margin-right: 0.7em;
    text-decoration: none;
    background-color: var(--bg-color);
    padding: 0.5em;
  }
}
</style>