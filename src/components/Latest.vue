<template>
 <section class="w-full py-16">
  <h2 class="text-4xl font-semibold mb-5 sm:text-4xl sm:px-6">Latest Articles</h2>
  <g-link to="/writing" class="more text-2xl mr-10 flex flex-row-reverse xs:text-xl">
   All articles 📝
  </g-link>
  <div class="pr-8 sm:ml-3 sm:mx-auto">
    <div class="card rounded-lg border border-l-8 shadow-md my-6 py-4" data-aos="slide-up" v-for="edge in $static.allPost.edges" :key="edge.node.id">
      <g-link :to="edge.node.path">
        <h3 class="text-2xl px-5 py-2 font-semibold">{{edge.node.title}}</h3>
        <h3 class="description text-lg mb-3 px-5 py-2">{{edge.node.description}}</h3>
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

  /* Smaller text for mobile */
@media screen and (max-width: 500px) {
  .more {
    display: none;
  }
}
</style>