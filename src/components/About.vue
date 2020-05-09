<template>
  <section class="about md:px-6" id="about">
    <h2 class="text-4xl font-bold xs:px-5 w-full xs:text-center">A bit about me</h2>
    <p class="text-xl font-medium pt-0 w-2/3 leading-loose xs:pt-5 xs:mx-auto xs:text-center">
      I’m passionate about making the web accessible to everyone and also an advocate for building open-source projects
      and I enjoy solving complex problems using web technologies. I’m passionate about building communities which led me to start the Vue Vixens chapter in Nigeria and the JAMstack community in Lagos. When I’m not coding you can find me geeking about photography and exploring different ways of documenting stories using photography.
    </p>
  </section>
</template>


<style lang="css">
.about {
  left: 50%;
	margin-left: -50vw;
	width: 100vw;
	min-width: 100%;
	padding: 6rem calc(50vw - 50%);
	box-sizing: border-box;
  position: relative;
  color: var(--bg-content-color);
  background: var(--pink-color) center url(../assets/img/layout.svg) no-repeat;
}
</style>