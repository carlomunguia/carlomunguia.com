<template>
  <div>
    <div class="music-player">
      <iframe
        width="100%"
        height="300"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/545598723&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      ></iframe>
    </div>
    <div>
      <iframe
        width="100%"
        height="300"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/545537586&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      ></iframe>
    </div>
    <iframe
      style="border: 0; width: 100%; height: 120px"
      src="https://bandcamp.com/EmbeddedPlayer/album=3892486203/size=large/bgcol=333333/linkcol=4ec5ec/tracklist=false/artwork=small/transparent=true/"
      seamless
    ></iframe>
    <p style="text-align: center; margin-top: 8px">
      <a
        href="http://ahoritaa.bandcamp.com/album/hola-lp-2"
        target="_blank"
        rel="noopener"
        >Hola LP by Ahoritaa</a
      >
    </p>
  </div>
</template>

<script>
export default {
  name: "Music",
  data() {
    return {
      msg: "This is Music",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
