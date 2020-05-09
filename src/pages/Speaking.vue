<template>
  <Layout class="w-full">
    <h1 class="text-4xl mx-10 my-5 font-bold uppercase">Speaking</h1>
    <h2 class="text-3xl mx-10 sm:text-left my-5 text-center font-bold">Upcoming Talks</h2>
    <div class="past sm:mx-10 mx-64">
      <div class="mx-6 py-4 flex" v-for="upcoming in speaking.upcoming" :key="upcoming.id">
      <g-link :to="upcoming.link">
        <div class="card rounded sm:mx-4 px-8 py-6">
          <span class="font-bold">{{upcoming.date}}</span>
          <h2 class="text-2xl my-3 font-semibold">{{upcoming.title}}</h2>
          <span class="font-bold">{{upcoming.event}}</span>
        </div>
      </g-link>
      </div>
    </div>
    <h3 class="text-3xl mx-10 my-5 sm:text-left  text-center font-bold">Past Talks</h3>
    <div class="past sm:mx-10 mx-64">
      <div class="mx-6 py-4 flex" v-for="past in speaking.past" :key="past.id">
      <g-link :to="past.link">
        <div class="card rounded sm:mx-4 px-8 py-6">
          <span class="font-bold">{{past.date}}</span>
          <h2 class="text-2xl my-3 font-semibold">{{past.title}}</h2>
          <span class="font-bold">{{past.event}}</span>
        </div>
      </g-link>
      </div>
    </div>
    <h2 class="text-3xl mx-10 my-5 sm:text-left  text-center font-bold">Interviews</h2>
    <div class="past sm:mx-10  mx-64">
      <div class="mx-6 py-4 flex" v-for="interviews in speaking.interviews" :key="interviews.id">
      <g-link :to="interviews.link">
        <div class="card rounded sm:mx-4 px-8 py-6">
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
  width: 40rem;
}
</style>