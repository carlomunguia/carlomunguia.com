<template>
  <div id="app">
    <menu class="main-menu">
      <router-link to="/">HOME</router-link>
      <router-link to="/r">RESUME</router-link>
      <router-link to="/z">ZEN</router-link>
      <router-link to="/m">MUSIC</router-link>
    </menu>
    <div class="site-title">

      <header class="site-title">
        <small>ZEN OF</small><br>
        CARLO MUNGUIA
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
  font-family: 'Futura', cursive, sans-serif;
  color: cornsilk;
  font-size: 1.6em;
  text-shadow: black 1px 1px 4px;
}

.contentArea {
  font-family: 'Raleway', serif;
  font-weight: 700;
  font-size: 2em;
  /*background-color: crimson;*/

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
