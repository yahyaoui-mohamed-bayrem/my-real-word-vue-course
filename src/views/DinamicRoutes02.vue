<template>
  <div>
    <h1>DinamicRoutes02</h1>
    <h2>this is {{ username02 }}'s page</h2>
  </div>
</template>

<script>
// This component can be more easily reused as a child component than DinamicRoutes01
export default {
  name: 'DinamicRoutes02',
  props: ['username02']
}
</script>

<style></style>
