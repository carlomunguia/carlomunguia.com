<template>
  <div id="app">
    <menu class="main-menu">
      <router-link to="/">Home</router-link>
      <router-link to="/r">Resume</router-link>
      <router-link to="/z">Zen</router-link>
      <router-link to="/m">Music</router-link>
    </menu>
    <div class="site-title">

      <header class="site-title">
        <small>The Zen Of</small><br>
        Carlo Munguia
      </header>

    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.main-menu {
  position: fixed;
  top: 20px;
  right: 20px;
  text-align: right;
}

.main-menu a {
  display: block;
  text-decoration: none;
  font-size: 1.5em;
  color: cornsilk;
}

body {
  background-color: darkturquoise;
  padding-right: 160px;
}

.site-title, .main-menu {
  font-family: 'Raleway', cursive, sans-serif;
  color: cornsilk;
  font-size: 1.6em;
  text-shadow: black 1px 1px 4px;
}

.contentArea {
  font-family: 'Roboto', cursive, serif;
  font-size: 1.2em;
}

.music-player {
  margin-bottom: 20px;
  border-left: 20px;
  backdrop-filter: brightness(20%);
}

.zen-garden {
  font-family: 'Raleway', sans-serif;
  display: inline-block;
  font-size: 1.5em;
}

.site-title {
  font-weight: 700;
  font-size: 1.6em;
}
</style>
