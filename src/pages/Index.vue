<template>
  <Layout :show-logo="false">
    <!-- Author intro -->
    <Author :show-title="true" />
    <!-- List posts -->
    <div id="main" class="posts">
      <carbon-ads></carbon-ads>
      <div class="posts-card">
        <PostCard v-for="edge in $page.allPost.edges" :key="edge.node.id" :post="edge.node" />
      </div>
    </div>
    <Pager :info="$page.allPost.pageInfo" />
  </Layout>
</template>

<page-query>
query Post ($page: Int) {
   allPost(sortBy: "date", page: $page, perPage: 30) @paginate {
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
import CarbonAds from "~/components/CarbonAds.vue";

export default {
  components: {
    Pager,
    Author,
    PostCard,
    CarbonAds
  },
  metaInfo: {
    title: "Home",
  },
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

@media only screen and (max-width: 650px) {
  #main {
    display: block;
  }
}
</style>

