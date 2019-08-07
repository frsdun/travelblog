<script>
  import BlogPost from "../../components/BlogPost.svelte";
  import Gallery from "../../components/Gallery.svelte";
</script>

<BlogPost
  title="Day 7: Swakopmund"
  date={new Date(2019, 4 - 1, 27)}
  next="namibia/day-8"
  previous="namibia/day-6">
  <Gallery images={[{ src: 'img/namibia/namibia-119.jpg', alt: '' }]} />
  <Gallery
    images={[{ src: 'img/namibia/namibia-119a.jpg', alt: '' }, { src: 'img/namibia/namibia-120.jpg', alt: '' }]} />

  <p>
    We were up well in time for sunrise (which is only at 7:15am), but
    Swakopmund is permanently shrouded in fog. Residents spend their days
    sweeping and raking sand, which we think is the only reason it doesn’t yet
    look like Kolmanskop. We spent the day getting new tyres and exploring the
    town. We visited the local museum, which details some natural history, the
    German history of Namibia and lists all the times the bridge over the dry
    riverbed has washed away in unexpected flash floods. We ended the day with a
    delicious German dinner of pork, mash potato and sauerkraut.
  </p>
  <Gallery
    images={[{ src: 'img/namibia/namibia-123.jpg', alt: '' }, { src: 'img/namibia/namibia-122.jpg', alt: '' }]} />
  <Gallery images={[{ src: 'img/namibia/namibia-124.jpg', alt: '' }]} />

</BlogPost>
