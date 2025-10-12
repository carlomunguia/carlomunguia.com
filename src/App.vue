<template>
  <div id="app">
    <menu class="main-menu">

      <router-link to="/h">about</router-link>
      <router-link to="/r">resume</router-link>
      <router-link to="/p">projects</router-link>
      <router-link to="/m">music</router-link>

    </menu>
    <div class="site-title">
      <header class="site-title">
        <small> (zen of)</small>
        <br>
        {:carlo munguia:}
      </header>
      <br>
    </div>
    <router-view/>
  </div>
</template>
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
    background-color: #8FC0A9;
    padding-right: 100px;
    font-size: 16px;
  }

  @media screen and (max-width: 600px) {
    body {
      font-size: 14px;
    }
  }

  .site-title, .main-menu {

    font-family: 'Space Mono', monospace;
    color: cornsilk;
    font-size: 1.4rem;
    text-shadow: black 1px 1px 4px;
    z-index: 1;
  }

  #boxcolor {
    color: navajowhite;
  }

  .content-area,
  .btn {
    font-family: 'Work Sans', sans-serif;
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
    font-size: 1.4em;
  }
</style>
