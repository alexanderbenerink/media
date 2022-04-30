<template>
  <li>{{ title }}</li>
</template>

<script>
export default {
  name: "FilmComponent",
  props: {
    title: String
  }
};
</script>

<style scoped>
  ul {
    list-style-type: none;
  }
</style>