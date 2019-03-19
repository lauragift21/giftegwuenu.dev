<template>
  <div class="about">
    <nav>
      <ul class="nav">
        <li>
          <ToggleTheme/>
        </li>
        <li>
          <g-link class="header__link" to="/">Home</g-link>
        </li>
      </ul>
    </nav>
    <br>
    <div class="about__data">
      <div class="headshot">
        <g-image
          src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=304&q=60"
          alt="headshot"
        />
      </div>
      <div class="bio">
        <h1>Hello! I'm Gift 👋</h1>
        <p>I'm a software developer and technical content creator. I've been programming for 3 years now</p>
      </div>
    </div>
  </div>
</template>

<script>
import ToggleTheme from "~/components/ToggleTheme.vue";
export default {
  components: {
    ToggleTheme
  }
};
</script>

<style lang="scss">
.about {
  min-height: 100vh;
  text-align: center;
  
  &__data {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }
}
.nav {
  display: flex;
  flex-direction: row-reverse;
  list-style: none;
  li {
    padding: 20px;
    margin-top: 30px;
  }
}

.bio {
  width: 34em;
}
</style>
