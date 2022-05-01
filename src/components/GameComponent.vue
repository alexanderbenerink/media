<template>
  <li>{{ title }}</li>
</template>

<script>
export default {
  name: "GameComponent",
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