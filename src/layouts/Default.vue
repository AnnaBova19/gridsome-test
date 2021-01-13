<template>
  <div class="layout">
    <header class="header">
      <h3>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </h3>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/books">Books</g-link>
        <g-link class="nav__link" to="/readers">Readers</g-link>
        <g-link class="nav__link" to="/about">About</g-link>
      </nav>
    </header>
    <slot/>
    <div v-if="sidebar">
      Lets show the sidebar!
    </div>
    <div v-if="$slots.block">
      <slot name="block"></slot> <!-- Block slot -->
    </div>
  </div>
</template>

<script>
export default {
  props: ['sidebar']
}
</script>


<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
