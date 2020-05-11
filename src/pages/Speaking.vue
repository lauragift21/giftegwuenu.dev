<template>
  <Layout class="w-full">
    <h1 class="text-4xl mx-10 sm:mx-1 my-5 font-bold uppercase" id="main" data-aos="fade-right">Speaking</h1>
    <h2 class="text-3xl mx-10 sm:text-left my-5 text-center font-bold" data-aos="slide-up">Upcoming Talks</h2>
    <div class="past sm:mx-1 sm:text-base mx-64">
      <div class="mx-6 py-4 flex" data-aos="slide-up" v-for="upcoming in speaking.upcoming" :key="upcoming.id">
      <g-link :to="upcoming.link">
        <div class="card rounded  px-8 py-6">
          <span class="font-bold">{{upcoming.date}}</span>
          <h2 class="text-2xl my-3 font-semibold">{{upcoming.title}}</h2>
          <span class="font-bold">{{upcoming.event}}</span>
        </div>
      </g-link>
      </div>
    </div>
    <h3 class="text-3xl mx-10 my-5 sm:text-left text-center font-bold" data-aos="slide-up">Past Talks</h3>
    <div class="past mx-64 sm:mx-1">
      <div class="mx-6 py-4 flex" data-aos="slide-up" v-for="past in speaking.past" :key="past.id">
      <g-link :to="past.link">
        <div class="card rounded  px-8 py-6">
          <span class="font-bold">{{past.date}}</span>
          <h2 class="text-2xl my-3 font-semibold">{{past.title}}</h2>
          <span class="font-bold">{{past.event}}</span>
        </div>
      </g-link>
      </div>
    </div>
    <h2 class="text-3xl mx-10 my-5 sm:text-left  text-center font-bold" data-aos="slide-up">Interviews</h2>
    <div class="past sm:mx-1  mx-64">
      <div class="mx-6 py-4 flex" data-aos="slide-up" v-for="interviews in speaking.interviews" :key="interviews.id">
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
</style>