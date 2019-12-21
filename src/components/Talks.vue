<template>
  <div class="talks">
    <h1>Speaking Engagements 🔈</h1>
    <h2>Upcoming</h2>
    <p>April, 22-24 2020: 
      <span class="talks__title">JAMstack FTW: Static Site Generation With Vue - </span> 
      REFACTR 2020, Altanta
    </p>
    <h2>Past</h2>
    <ul>
      <li v-for="talk in Talks" :key="talk.id">
        <span class="talks__date">{{talk.date}}:</span>
        <span class="talks__title">
          &nbsp;
          <a :href="talk.link">{{talk.title}}</a> -
        </span>
        <span class="talks__date">&nbsp;{{talk.event}}</span>
      </li>
    </ul>
    <p>
      Interested in having me speak at your event?
      Let's talk about it via
      <a
        href="https://twitter.com/lauragift21"
      >DM</a> or
      <a href="mailto:laurandidi21@gmail.com">email</a>.
    </p>
  </div>
</template>

<script>
import Talks from "~/data/talks.json";
export default {
  data() {
    return {
      Talks
    };
  }
};
</script>

<style lang="scss">
.talks {
  margin: 0 auto;
  max-width: 1100px;
  &__date {
    font-weight: 400;
  }
  &__title {
    font-weight: 900;
  }
}
@media only screen and (max-width: 650px) {
  .talks {
    margin: 10px;
  }
}
</style>
