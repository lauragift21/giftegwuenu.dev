<template>
  <Layout>
    <h1 class="text-4xl mx-10 my-5 font-bold uppercase" id="main">Writing</h1>
    <p class="my-5 mx-10 font-medium text-lg sm:text-sm">Here you'll find my collected writing on topics ranging from JavaScript,and the web industry, to career related and soft skills topics. Want to chat about anything I've written? Drop me an email or say hi on Twitter.</p>
    <p class="my-2 mx-12 text-right text-lg font-bold">{{$page.allPost.totalCount}} Articles</p>
    <div class="grid grid-cols-2 sm:grid-cols-1">
      <PostCard data-aos="slide-up" v-for="edge in $page.allPost.edges" :key="edge.node.id" :post="edge.node" />
    </div>
  </Layout>
</template>

<page-query>
query Post ($page: Int) {
   allPost(sortBy: "date", page: $page, perPage: 200) {
    pageInfo {
     totalPages,
      currentPage
    }
    totalCount
    edges {
      node {
        id
        title
        path
        tags {
          id
          title
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
import PostCard from "~/components/PostCard.vue";
export default {
  components: {
    PostCard
  }
};
</script>
