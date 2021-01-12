<template>
  <Layout>
    <div v-if="user">
      <h1>{{ user.name }}</h1>
    </div>
  </Layout>
</template>

<script>
export default {
  data() {
    return {
      user: null
    }
  },
  async mounted() {
    const { id } = this.$route.params
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)

    this.user = await response.json()
  }
}
</script>