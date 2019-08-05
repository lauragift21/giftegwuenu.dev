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
      <div class="bio">
        <h1 class="intro">Hello! I'm Gift 👋</h1>
        <span>
          I'm a Full Stack Developer currently working at Andela, I am passionate about making the web accessible to everyone and also an advocate for building open-source software
          and I enjoy solving complex problems using web technologies. I'm also passionate about building communities which led me to start
          the
          <a
            href="https://vuevixens.org"
          >Vue Vixens</a> chapter in Nigeria and the
          <a href="https://meetup.com/JAMStack-Lagos/">JAMstack community</a> in Lagos. I'm also a co-organizer for
          <a
            href="https://concatenate.io/"
          >Concatenate Conference.</a>
          When I'm not coding you can find me geeking about
          <a
            href="https://unsplash.com/@gift_e"
          >Photography</a> and exploring different ways of documenting stories using photography.
        </span>
        <p class="links">
          <a href="//twitter.com/lauragift21">
            <g-image alt="twitter" class src="~/assets/images/twitter.png"/>
          </a>
          <a href="//dev.to/lauragift21">
            <g-image alt="dev" class src="~/assets/images/dev.jpg" width="30"/>
          </a>
          <a href="//instagram.com/lauragift_">
            <g-image alt="instagram" class src="~/assets/images/instagram.png"/>
          </a>
          <a href="//github.com/lauragift21">
            <g-image alt="github" class src="~/assets/images/github.png"/>
          </a>
          <a href="//linkedin.com/in/egwuenugift">
            <g-image alt="linkedin" class src="~/assets/images/linkedin.png" width="32"/>
          </a>
          <a href="//noti.st/lauragift21">
            <g-image alt="notist" class src="~/assets/images/notist.jpg" width="32"/>
          </a>
          <a href="mailto:laurandidi21@gmail.com">
            <g-image alt="notist" class src="~/assets/images/email.svg" width="34"/>
          </a>
        </p>
      </div>
      <div class="headshot">
        <g-image
          src="https://res.cloudinary.com/lauragift/image/upload/v1562153429/gift5_irlhir.jpg"
          class="pic"
          alt="headshot"
        />
      </div>
    </div>
    <Talks />
  </div>
</template>

<script>
import ToggleTheme from "~/components/ToggleTheme.vue";
import Talks from "~/components/Talks.vue";
export default {
  components: {
    ToggleTheme,
    Talks
  }
};
</script>

<style lang="scss">
.about {
  min-height: 100vh;

  &__data {
    display: flex;
    justify-content: center;
    align-items: center;
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
.links {
  margin-top: 0.9em;
  a {
    margin: 0 0.5em;
  }
}
.bio {
  width: 32em;
  margin-right: 20px;
  text-align: left;
}

.intro {
  font-size: 3em;
}

.pic {
  border-radius: 3px;
  height: 400px;
}

@media only screen and (max-width: 650px) {
  .about {
    &__data {
      display: flex;
      flex-direction: column;

      .bio {
        width: 22em;
        text-align: center;
      }

      .headshot {
        display: none;
      }
    }
  }
}
</style>
