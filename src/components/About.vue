<template>
 <section class="about md:px-6 my-10 sm:my-6" id="about" data-aos="fade">
  <h1 class="text-6xl font-black mb-6">About Me</h1>
  <section class="flex flex-col flex-wrap section">
   <article class="my-6 pr-6 font-serif text-2xl w-full">
    <p class="pb-12">
     Gift Egwuenu is a Developer Advocate at Cloudflare. With over 5 years of
     experience in web development and building tools to help businesses grow.
     In her previous role, she was a front-end developer. She is now working in
     developer advocacy.
    </p>

    <p class="pb-12">
     Gift shares her experience in web development, JamStack, career-related
     topics, and developer lifestyle videos with people seeking guidance in the
     tech industry.
    </p>

    <p class="pb-12">
     It's her pleasure to have been named a Cloudinary Media Developer Expert,
     Microsoft MVP, Auth0 Ambassador, GitHub Star, Polynuat Advisor, and Nuxt.js
     Ambassador.
    </p>

    <p class="pb-12">
     She spends her free time reading, cooking, and going on travel adventures
     whenever she is not making content or writing code.
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
    <p class="pb-12">
     Say hi to her on Twitter
     <a href="https://twitter.com/lauragift_">@lauragift_</a>,.
    </p>
   </article>

   <div class="">
    <!-- <img
					class="rounded-lg shadow-xl"
					loading="lazy"
					src="https://res.cloudinary.com/lauragift/image/upload/c_scale,q_auto,w_450/v1624353138/4EFA5623-1143-4480-A319-F5389240D87A_hgsluf.jpg"
				/> -->
   </div>
  </section>
 </section>
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