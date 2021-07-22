<template>
  <Layout class="w-full">
    <h1 class="text-4xl mx-10 sm:mx-1 my-5 font-bold uppercase" id="main">Speaking</h1>
    <h3 class="text-3xl my-5 sm:text-left md:text-left text-center font-bold" data-aos="slide-up" v-if="speaking.upcoming">Upcoming Talks</h3>
    <div class="past sm:mx-2 sm:text-base mx-64">
    <p class="text-center">Want me to speak at your event? Reach out to me via <a href="mailto:laurandidi21@gmail.com">email</a> or <a href="https://twitter.com/lauragift_">twitter.</a></p>
      <div class="py-4 flex" data-aos="slide-up" v-for="upcoming in speaking.upcoming" :key="upcoming.id">
        <g-link :to="upcoming.link">
          <div class="card rounded px-8 py-6">
            <span class="font-bold">{{upcoming.date}}</span>
            <h2 class="text-2xl my-3 font-semibold">{{upcoming.title}}</h2>
            <span class="font-bold">{{upcoming.event}}</span>
          </div>
        </g-link>
      </div>
    </div>
    <h3 class="text-3xl my-5 sm:text-left md:text-left text-center font-bold" data-aos="slide-up">Past Talks</h3>
    <div class="past mx-64 sm:mx-4 md:mx-4">
      <div class="py-4 flex" data-aos="slide-up" v-for="past in speaking.past.slice().reverse()" :key="past.id">
        <g-link :to="past.link">
          <div class="card rounded px-8 py-6">
            <span class="font-bold">{{past.date}}</span>
            <h2 class="text-2xl my-3 font-semibold">{{past.title}}</h2>
            <span class="font-bold">{{past.event}}</span>
          </div>
        </g-link>
      </div>
    </div>
    <h2 class="text-3xl my-5 sm:text-left md:text-left text-center font-bold" data-aos="slide-up">Interviews</h2>
    <div class="past sm:mx-4 md:mx-4  mx-64">
      <div class="py-4 flex" data-aos="slide-up" v-for="interviews in speaking.interviews" :key="interviews.id">
      <g-link :to="interviews.link">
        <div class="card rounded  px-8 py-6">
          <span class="font-bold">{{interviews.date}}</span>
          <h2 class="text-2xl my-3 font-semibold">{{interviews.title}}</h2>
          <span class="font-bold">{{interviews.event}}</span>
        </div>
      </g-link>
      </div>
    </div>
  </Layout>
</template>

<script>
import speaking from '../data/speaking.json'
export default {
  data () {
    return {
      speaking
    }
  },
  metaInfo: {
    title: 'Speaking',
    meta: [
      { name: 'title', content: 'Speaking' }
    ],
  }
}
</script>

<style lang="scss" scoped>
h1, h2 {
  color: var(--title-color);
}

.card {
  background: var(--secondary-color);
}

.past:last-of-type {
  overflow: hidden;
}

  /* Smaller text for mobile */
@media screen and (min-width: 200px) {
  .card {
    width: 24rem;
  }
}

@media screen and (min-width: 1200px) {
  .card {
    width: 40rem;
  }
}
</style>