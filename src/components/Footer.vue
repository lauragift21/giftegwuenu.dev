<template>
  <footer class="pt-10 xs:pt-5" id="contact">
    <h3 class="text-5xl font-bold pb-4 xs:text-2xl">Get in Touch</h3>
    <div class="box w-1/2 mx-auto py-8 border-solid border-4 rounded-lg xs:w-10/12">
      <p class="font-bold text-xl pb-16 xs:pb-8">Want to work together or have any questions?</p>
      <button
        class="hover:shadow font-bold py-3 px-8 text-xl rounded text-center"
        href="mailto:laurandidi21@gmailcom"
      >Say Hello 👋</button>
    </div>

    <div class="px-4 pb-4 xs:block">
      <div class="my-4 font-bold">
        <a href="https://patreon.com/lauragift21" class="px-3 text-lg">Patreon</a>
        <a href="resume.pdf" class="px-3 text-lg">Resume</a>
        <a href="https://github.com/lauragift21" class="px-3 text-lg">GitHub</a>
      </div>
      <p class="font-bold text-md col-end-3">Designed and Developed by <span class="p-1 rounded-sm bg-pink-600">Gift Egwuenu</span></p>
      <!-- <p class="font-bold text-md col-end-3">Made with Gridsome and Hosted on Netlify</p> -->
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
button {
  background: var(--pink-color);
  color: var(--text-color);
}

</style>