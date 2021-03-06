<template>
	<Layout class="w-full">
		<section class="mx-auto">
			<div class="text-center mx-auto" id="main">
				<h1 class="text-4xl sm:text-2xl md:text-4xl font-semibold">
					{{ $page.post.title }}
				</h1>
				<span class="text-lg font-bold mr-2">{{ $page.post.date }}</span>
				<span class="text-2xl font-bold mr-2">.</span>
				<span class="text-2xl font-bold mr-1">⏱</span>
				<span class="text-lg font-bold">{{ $page.post.timeToRead }} mins read</span>
			</div>
			<PostTags :post="$page.post" />
			<article
				class="mx-auto w-2/3 sm:mx-auto sm:w-10/12 md:mx-auto md:w-11/12 xs:mx-auto"
			>
				<p class="lead" v-html="$page.post.excerpt" />
				<div class="markdown" v-html="$page.post.content" />
				<br />
				<g-link to="/writing" class="inline rounded px-3 py-2 text-lg">
					View All Posts 🔖
				</g-link>
				<hr class="line w-3/4 mx-auto my-8" />
				<carbon-ads />
				<hr class="line w-3/4 mx-auto my-8" />
				<author></author>
			</article>
		</section>
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
import getShareImage from "@jlengstorf/get-share-image";
import PostTags from "~/components/PostTags";
import Author from "~/components/Author.vue";
import CarbonAds from "~/components/CarbonAds.vue";
export default {
	components: {
		PostTags,
		Author,
		CarbonAds,
	},
	metaInfo() {
		return {
			title: this.$page.post.title,
			meta: [
				{
					name: "title",
					content: this.$page.post.title,
				},
				{
					name: "description",
					content: this.$page.post.description,
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
			link: [
				{
					rel: "canonical",
					href: `https://giftegwuenu.dev/${this.$page.post.path}`,
				},
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
				tagline: "giftegwuenu.dev",
				cloudName: "lauragift",
				imagePublicID: "social_cards_x3icte",
				titleFont: "futura",
				taglineFont: "futura",
				titleFontSize: 72,
				textColor: "232129",
			});
			return socialImage;
		},
	},
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
	background: linear-gradient(
		to bottom,
		var(--link-accent-color) 0%,
		var(--link-accent-color) 100%
	);
}
</style>