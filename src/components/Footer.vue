<template>
	<footer class="pt-10 xs:pt-5" id="contact" data-aos="fade">
		<h3 class="text-5xl font-bold pb-4">Get in Touch</h3>
		<div
			class="box w-1/2 mx-auto py-8 border-solid border-4 rounded-lg sm:w-10/12"
		>
			<p class="font-bold text-2xl pb-16 sm:pb-8">
				Want to work together or have any questions?
			</p>
			<a
				class="mail hover:shadow font-bold py-3 px-8 text-xl rounded text-center"
				href="mailto:laurandidi21@gmail.com"
				>Say Hello 👋</a
			>
		</div>

		<div class="px-4 pb-4 sm:block">
			<div class="my-4 font-bold">
				<a
					href="https://patreon.com/lauragift21"
					target="_blank"
					rel="noopener"
					class="px-3 text-xl"
					>Patreon</a
				>
				<a href="resume.pdf" target="_blank" rel="noopener" class="px-3 text-xl"
					>Resume</a
				>
				<a
					href="https://github.com/lauragift21"
					target="_blank"
					rel="noopener"
					class="px-3 text-xl"
					>GitHub</a
				>
			</div>
			<div class="flex my-4 justify-center items-center flex-col">
				<iframe
					src="https://github.com/sponsors/lauragift21/button"
					title="Sponsor lauragift21"
					height="32"
					width="140"
					style="border: 0"
				></iframe>
				<a href="https://www.buymeacoffee.com/lauragift" class="mt-2">
					<img
						src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=lauragift&button_colour=e2216a&font_colour=ffffff&font_family=Cookie&outline_colour=ffffff&coffee_colour=FFDD00"
						alt="Buy me a Coffee Button"
					/>
				</a>
			</div>
			<p class="font-bold text-lg col-end-3">
				Designed and Developed by
				<span class="footnote py-1 px-2 rounded-sm">Gift Egwuenu</span>
			</p>
		</div>
	</footer>
</template>

<style>
footer {
	left: 50%;
	text-align: center;
	margin-left: -50vw;
	width: 100vw;
	min-width: 100%;
	box-sizing: border-box;
	position: relative;
	color: var(--bg-text-color);
	/* background: var(--pink-color); */
	flex-shrink: 0;
}
.box {
	border-color: var(--content-color);
}
.mail {
	background: var(--dark-pink);
	color: var(--white-text);
}

.footnote {
	background: var(--dark-pink);
	color: var(--white-text);
}
</style>
