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

    <div class="flex content-end justify-center mt-10 mb-5">
      <a href="https://www.instagram.com/lauragift_" target="_blank">
        <img src="../assets/img/instagram.svg" class="px-3" alt="my instagram handle" />
      </a>
      <a href="https://www.linkedin.com/in/egwuenugift/" target="_blank">
        <img src="../assets/img/linkedin.svg" class="px-3" alt="my linkedin handle" />
      </a>
      <a href="https://www.twitter.com/lauragift_" target="_blank">
        <img src="../assets/img/twitter.svg" class="px-3" alt="my twitter handle" />
      </a>
    </div>

    <div class="px-4 pb-4 xs:block">
      <div class="my-4 font-bold">
        <a href="patreon.com/lauragift21" class="px-3">Patreon</a>
        <a href="#" class="px-3">Resume</a>
        <a href="https://github.com/lauragift21" class="px-3">GitHub</a>
      </div>
      <p class="font-bold text-md col-end-3">Designed and Developed by Gift Egwuenu</p>
      <p class="font-bold text-md col-end-3">Made with Gridsome and Hosted on Netlify</p>
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
  color: var(--bg-content-color);
  background: var(--pink-color);
  flex-shrink: 0;
}
.box {
  border-color: #33272a;
}
button {
  background: var(--bg-color);
  color: var(--text-color);
}

</style>