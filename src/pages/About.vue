<template>
	<Layout class="w-full">
		<h1 class="text-6xl font-black mb-6">About Me</h1>
		<section class="flex sm:flex-col md:flex-col flex-wrap">
			<article class="my-6 pr-6 font-serif text-2xl w-8/12">
				<p class="pb-12">
					Hi, <span class="font-bold hover:underline">I'm Gift Egwuenu </span> -
					a frontend developer and content creator originally from Delta state,
					Nigeria currently based in Haarlem Netherlands. I have worked in tech and
					on the web for over 4 years with experience ranging from JavaScript,
					Vue.js, CSS, Accessibility, Technical Writing and I have worked for
					companies like Rekuur Solutions, Andela, Ruby Together and Passionate
					People.
				</p>
				<p class="pb-12">
					I love sharing and contributing to the tech community and it has become a
					significant part of my career. I'm consistently engaging and advocating for
					open and inclusive developer communities and love sharing my knowledge and
					experience by creating tech content for developers on my blog and YouTube
					channel. I've been nominated as a Media Developer Expert at Cloudinary,
					Microsoft MVP, an Auth0 Ambassador, GitHub Star, and a Nuxt.js Ambassador.
				</p>
				<p class="pb-12">
					When I'm not coding, you can find me geeking about photography, trying new
					food recipes, and exploring different ways of creating content that can
					help people pivot their tech careers.
				</p>
				<p class="pb-8">
					I share a lot of helpful resources for developers and also curate some
					resources myself.
					<br />
					You can check out
					<a href="https://www.educative.io/?aff=Bwm4">
						Educative a platform with helpful courses for developers.
					</a>
				</p>
				<p>
					You can catch me on <a href="https://twitter.com/lauragift_">Twitter </a>,
					<a href="https://linkedin.com/egwuenugift">LinkedIn</a>,
					<a href="https://polywork.com/lauragift_">Polywork</a>, and
					<a href="https://github.com/lauragift21">GitHub.</a>
				</p>
			</article>
			<div class="w-4/12 sm:w-6/12">
				<img
					class="rounded-lg shadow-xl"
					loading="lazy"
					src="https://res.cloudinary.com/lauragift/image/upload/c_scale,q_auto,w_450/v1624353138/4EFA5623-1143-4480-A319-F5389240D87A_hgsluf.jpg"
				/>
			</div>
		</section>
	</Layout>
</template>

<style lang="scss" scoped>
a {
	color: var(--link-color);
	background: linear-gradient(
		to bottom,
		var(--link-accent-color) 0%,
		var(--link-accent-color) 100%
	);
	background-position: 0 100%;
	background-repeat: repeat-x;
	background-size: 4px 4px;
	transition: background-size 0.5s;
}

a:hover {
	background: var(--link-accent-color);
	color: var(--link-color);
	background-size: 4px 50px;
}
</style>