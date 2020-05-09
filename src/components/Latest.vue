<template>
 <section class="w-full py-6">
  <h2 class="text-4xl xs:text-xl text-left  font-semibold mb-5 sm:text-center sm:text-3xl">Latest Articles</h2>
  <div class="pr-8 sm:ml-3 sm:mx-auto">
    <div class="card rounded-sm border border-l-8 shadow-md my-4 pb-3" v-for="edge in $static.allPost.edges" :key="edge.node.id">
      <g-link :to="edge.node.path">
        <h3 class="text-md px-5 py-2 font-semibold">{{edge.node.date}}</h3>
        <h3 class="text-xl px-5 py-2 font-semibold">{{edge.node.title}}</h3>
        <h3 class="description text-md mb-3 px-5 py-2">{{edge.node.description}}</h3>
      </g-link>
    </div>
  </div>
 </section>
</template>

<static-query>
query Post {
 allPost(sortBy: "date", limit:3 ) {
  edges {
    node {
      id
      date (format: "MMMM DD, YYYY")
      title
      description
      path
    }
  }
}
}
</static-query>

<style scoped>
  h2 {
    color: var(--title-color);
  }
  .card {
    border-color: var(--text-color);
    cursor: pointer;
  }
  .description {
    color: var(--text-color);
  }
</style>