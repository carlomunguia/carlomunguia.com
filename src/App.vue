<template>
  <div id="app">
    <menu class="main-menu">
      <router-link to="/">home</router-link>
      <router-link to="/r">resume</router-link>
      <router-link to="/z">portfolio</router-link>
      <router-link to="/m">music</router-link>
    </menu>
    <div class="site-title">

      <header class="site-title">
        <small>zen of</small><br>
        CARLO MUNGUIA
      </header>
  <br>
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
  font-size: 1.4rem;
  color: cornsilk;

}

body {
  background-color: #706993;
  padding-right: 160px;
  font-size: 16px;
}

@media screen and (max-width: 600px) { body: { font-size: 14px; } }

.site-title, .main-menu {

  font-family: 'Poiret One', cursive;
  color: cornsilk;
  font-size: 1.4rem;
  text-shadow: black 1px 1px 4px;
}

.content-area,
.btn {
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
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
  font-size: 1.4em;
}
</style>
