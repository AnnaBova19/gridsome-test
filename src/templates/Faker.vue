<template>
  <Layout>
    <div class="title">
      <h4>{{ $page.faker.author }}</h4>
      <div><i>Last Visit:</i> {{ $page.faker.date }}</div>
    </div>
    <p><i>Contact Email:</i> {{ $page.faker.email }}</p>
    <p><i> Profile:</i> {{ $page.faker.title }}</p>
    <p>{{ $page.faker.content }}</p>
  </Layout>
</template>

<page-query>
query Faker ($id: ID!){
  faker (id: $id) {
    id
    email
    author
    title
    date(format: "YYYY/MM/DD")
    content
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Reader Info'
  }
}
</script>

<style scoped>
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>