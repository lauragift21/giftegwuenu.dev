<template>
	<Layout class="w-full mx-auto">
		<div class="w-3/4 mx-auto">
			<h1 class="text-6xl mb-4 font-bold" id="main">Uses</h1>
			<p class="text-lg font-thin">
				Here's a list of tools I use for my day to day work. I'll try to always
				update this list so it reflects the current tools I'm using at the moment.
			</p>
			<img
				loading="lazy"
				class="my-4 rounded-xl shadow-lg"
				src="https://res.cloudinary.com/lauragift/image/upload/v1626363410/DSC00547_qaztw9.jpg"
				alt="Gift's Workspace"
			/>
			<div>
				<h2 class="text-3xl font-bold my-4">Editor & Terminal ⌨️</h2>
				<ul class="text-xl list-inside list-disc">
					<li><b>Editor - </b> VSCode</li>
					<li>
						<b>Color Theme - </b> I switch between
						<a
							href="https://marketplace.visualstudio.com/items?itemName=sdras.night-owl"
							>Night Owl</a
						>
						by Sarah Drasner and
						<a
							href="https://marketplace.visualstudio.com/items?itemName=RobbOwen.synthwave-vscode"
							>SynthWave '84</a
						>
						by Robb Owen
					</li>
					<li>
						<b>Coding Font - </b><a href="https://dank.sh/"> Dank Mono</a> by Phil
						Plückthun
					</li>
					<li>
						<b>Terminal - </b> I switch between ITerm and Hyper. I love them equally I
						guess?
					</li>
				</ul>
				<h2 class="text-3xl font-bold my-4">Desktop Apps 🖥️</h2>
				<ul class="text-xl list-inside list-disc">
					<li>Spectacle - Helps me manage my window arrangement.</li>
					<li>Adobe XD - use this for creating UI designs</li>
					<li>Slack - for communication and what not</li>
					<li>Discord - engaging with the dev community on Discord is fun!</li>
					<li>Rocket - a fun slack-like emoji app for Mac 🚀</li>
					<li>Hyper - useful terminal app for Mac</li>
					<li>ITerm - my default terminal before Hyper stole my heart</li>
					<li>Alfred - automate my workflow</li>
					<li>Notion - my diary for everything</li>
				</ul>
				<h2 class="text-3xl font-bold my-4">Recording 🎤📸</h2>
				<ul class="text-xl list-inside list-disc">
					<li>Screenflow - use this for screen recording and editing</li>
					<li>Final Cut Pro - edit my videos with this</li>
					<li>
						Sony A6400 Mirroless 4K Camera - for making vlogs and videos that are not
						screen recorded
					</li>
					<li>Sigma 16mm F1.4 Lens</li>
					<li>Boya BY-MM1 Universal Cardioid Microphone</li>
					<li>Logitech C922 Pro Stream HD - mostly for my meetings and streams</li>
					<li>Shure BETA® 87A Vocal Microphone - love this mic!</li>
				</ul>
				<h2 class="text-3xl font-bold my-4">Desk Setup 👩‍💻💻</h2>
				<ul class="text-xl list-inside list-disc">
					<li>MacBook Pro 16" 2019 16GB RAM 516GB Storage</li>
					<li>Samsung 27" LED Monitor with Eye saver mode</li>
					<li>Bose Soundlink Micro Speaker</li>
					<li>Logitech MX Keys Advanced Wireless Illuminated Keyboard</li>
					<li>Apple Magic Trackpad 2</li>
				</ul>
				<h2 class="text-3xl font-bold my-4">This Website 💻</h2>
				<p class="text-xl">
					This website is built using Gridsome, Tailwind CSS and uses Netlify CMS for
					managing content.
				</p>
			</div>
		</div>
	</Layout>
</template>

<script>
export default {
	metaInfo: {
		title: "Uses",
		meta: [{ name: "title", content: "Uses" }],
	},
};
</script>

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
