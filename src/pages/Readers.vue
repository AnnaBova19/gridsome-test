<template>
  <Layout>
    <div class="readers">
      <div class="card" v-for="edge in $page.allFaker.edges" :key="edge.node.id">
        <h4>
          <g-link :to="`readers/${edge.node.id}`">{{ edge.node.author }}</g-link>
        </h4>
        <p><i>Contact Email:</i> {{ edge.node.email }}</p>
        <p><i> Profile:</i> {{ edge.node.title }}</p>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query allFaker {
  allFaker (perPage: 10) {
    edges {
      node {
        id
        email
        author
        title
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Readers'
  }
}
</script>

<style scoped>
.readers {
  display: flex;
  flex-direction: column;
}
.card {
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  padding: 0 15px 20px;
  margin: 10px 5px;
}
</style>