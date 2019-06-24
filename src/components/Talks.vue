<template>
  <div class="talks">
    <h1>Speaking Engagements 🔈</h1>
    <h2>Past</h2>
    <ul>
      <li v-for="talk in Talks" :key="talk.id">
        <span class="talks__date">{{talk.date}}:</span>
        <span>&nbsp{{talk.title}} -</span>
        <span>&nbsp{{talk.event}}</span>
      </li>
    </ul>
    <h2>Upcoming</h2>
    <p>Coming Soon...</p>
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
    font-weight: 700;
  }
}
</style>
