<template>
  <Layout :show-logo="false">
    <!-- Author intro -->
    <Author :show-title="true" />
    <!-- List posts -->
    <div id="main" class="posts">
      <div id="carbonads"></div>
      <div class="posts-card">
        <PostCard v-for="edge in $page.allPost.edges" :key="edge.node.id" :post="edge.node" />
      </div>
    </div>
    <Pager :info="$page.allPost.pageInfo" />
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
        src:
          "https://cdn.carbonads.com/carbon.js?serve=CE7DV2J7&placement=wwwgiftegwuenucom",
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

#carbonads {
  position: relative;
  display: flex;
  width: 300px;
  height: 250px;
  background-color: #fff;
  box-shadow: inset 0 0 1px 1px hsla(0, 0%, 0%, 0.15);
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial,
    sans-serif;

  justify-content: center;
  align-items: center;
}

#carbonads a {
  color: #111;
  text-decoration: none;
}

#carbonads a:hover {
  color: #111;
}

#carbonads span {
  display: block;
  overflow: hidden;
}

.carbon-img {
  display: block;
  margin: 0 0 8px;
  line-height: 1;
}

.carbon-img img {
  max-width: 150px !important;
  width: 150px;
  height: auto;
}

.carbon-text {
  display: block;
  margin-bottom: 8px;
  padding: 0 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.35;
}

.carbon-poweredby {
  position: absolute;
  right: 10px;
  bottom: 10px;
  display: block;
  padding: 5px 6px;
  border-radius: 2.5px;
  background-color: hsl(246, 93%, 69%);
  color: #fff !important;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 600;
  font-size: 8px;
  line-height: 1;
}

#carbonads {
  margin-right: 0.7em;
}

@media only screen and (max-width: 650px) {
  #main {
    display: block;
  }
  #carbonads {
    display: none;
  }
}

@media only screen and (min-width: 1650px) {
  #carbonads {
    margin-right: -9em;
  }
}
</style>

