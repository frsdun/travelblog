<script>
  import BlogPost from "../../components/BlogPost.svelte";
  import Gallery from "../../components/Gallery.svelte";
</script>

<BlogPost
  title="Day 1: Drive from Irene to Augrabies"
  date={new Date(2019, 4 - 1, 21)}
  next="namibia/day-2"
  start="namibia">

  <Gallery
    images={[{ src: 'img/namibia/namibia-1.jpg', alt: 'Darkening clouds and rain' }]} />

  <p>
    We woke at the crack of dawn and set off on the first of many long days of
    driving. In preparation for this, and desert heat, we have decided to become
    the sort of people who awake in time to watch the sunrise. Sunrise was
    quickly followed by darkening clouds and rain for most of our journey
    through the Northern Cape, and we arrived at Augrabies Falls National Park
    in the late afternoon. After admiring the falls, we set up our roof top tent
    and watched the sunset, followed by lightning over the darkening horizon.
  </p>

  <Gallery
    images={[{ src: 'img/namibia/namibia-2.jpg', alt: 'Augrabies Falls' }]} />
  <Gallery
    images={[{ src: 'img/namibia/namibia-3.jpg', alt: 'Augrabies Falls' }, { src: 'img/namibia/namibia-4.jpg', alt: "The CRV with it's roof top tent" }]} />
  <Gallery
    images={[{ src: 'img/namibia/namibia-5.jpg', alt: 'Sunset clouds' }]} />

</BlogPost>
