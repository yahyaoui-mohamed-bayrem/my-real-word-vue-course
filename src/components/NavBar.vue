<template>
  <div id="nav" class="nav">
    <router-link to="/" class="brand">Real World Events</router-link> |
    <nav>
      <router-link :to="{ name: 'event-list' }">List</router-link> |
      <router-link :to="{ name: 'event-create' }">Create page</router-link> |
      <router-link :to="{ name: 'dr01', params: { username01: 'expl01' } }">
        dinamic routs 01
      </router-link>
      |
      <router-link :to="{ name: 'dr02', params: { username02: 'expl02' } }">
        dinamic routs 02
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}
.nav > .brand {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.5em;
  color: #39b982;
  text-decoration: none;
}
.nav .nav-item {
  box-sizing: border-box;
  margin: 0 5px;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
}
.nav .nav-item.router-link-exact-active {
  color: #39b982;
  border-bottom: solid 2px #39b982;
}
</style>
