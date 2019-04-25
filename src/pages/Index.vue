<template>
  <Layout :show-logo="false">
    <!-- Author intro -->
    <Author :show-title="true"/>
    <!-- List posts -->
    <div id="main" class="posts">
      <div id="codefund"></div>
      <div class="posts-card">
        <PostCard v-for="edge in $page.allPost.edges" :key="edge.node.id" :post="edge.node"/>
      </div>
    </div>
    <Pager :info="$page.allPost.pageInfo"/>
  </Layout>
</template>

<page-query>
query Post ($page: Int) {
   allPost(sortBy: "date", page: $page, perPage: 10) @paginate {
    pageInfo {
     totalPages,
      currentPage
    }
    edges {
      node {
        id
        title
        path
        tags {
          id
          title
          path
        }
        date (format: "D. MMMM YYYY")
        timeToRead
        description
        ...on Post {
            id
            title
            path
        }
      }
    }
  }
}
</page-query>

<script>
import { Pager } from "gridsome";
import Author from "~/components/Author.vue";
import PostCard from "~/components/PostCard.vue";

export default {
  components: {
    Pager,
    Author,
    PostCard
  },
  metaInfo: {
    title: "Home",
    script: [
      {
        src: "https://codefund.app/properties/264/funder.js?template=square",
        async: true
      }
    ]
  }
};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  align-items: center;
}
a {
  padding: 20px;
  color: var(--link-color);
  text-decoration: none;
  border-radius: 10px;
}

a:hover {
  background-color: #48e617 !important;
  border-color: #48e617 !important;
}

#main {
  display: grid;
  grid-template-columns: 22% 60%;
}

#codefund {
  margin-right: 0.7em;
}

@media only screen and (max-width: 650px) {
  #main {
    display: block;
  }
  #codefund {
    display: none;
  }
}

@media only screen and (min-width: 1650px) {
  #codefund {
    margin-right: -9em;
  }
}
</style>

