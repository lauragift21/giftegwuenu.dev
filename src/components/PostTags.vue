<template>
   <div class="post-tags">
   		<span class="post-tags text-lg" v-for="tag in post.tags" :key="tag.id" :to="tag.path">
   			{{ tag.title }}
   		</span>
    </div>
</template>

<script>
export default {
  props: ['post']
}
</script>

<style lang="scss">
.post-tags {
  margin: 1em 0 0;
	color: currentColor;
  &__link {
  	margin-right: .7em;
  	text-decoration: none;
  	background-color: var(--bg-color);
  	padding: .5em;
  }
}
</style>