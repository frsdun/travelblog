<script>
  import BlogPost from "../../components/BlogPost.svelte";
  import Gallery from "../../components/Gallery.svelte";
</script>

<BlogPost
  title="Šolta"
  date={new Date(2018, 9 - 1, 18)}
  next="croatia/10"
  previous="croatia/8">

  <Gallery images={[{ src: 'img/croatia/croatia (104).jpg', alt: '' }]} />
  <Gallery
    images={[{ src: 'img/croatia/croatia (102).jpg', alt: '' }, { src: 'img/croatia/croatia (98).jpg', alt: '' }]} />

  <p>
    We took a ferry from Split to the island of Šolta (population approximately
    1 700). Although it is small, it has a few towns and an economy based on
    olives, fruit, honey, fishing and tourism. It is one of the quieter islands,
    far less glamorous than its neighbours Brač and Hvar, which made it all the
    more attractive to us.
  </p>
  <Gallery images={[{ src: 'img/croatia/croatia (103).jpg', alt: '' }]} />
  <Gallery images={[{ src: 'img/croatia/croatia (105).jpg', alt: '' }]} />
  <p>
    The highest point of the island is only 238m, but it rises steeply from the
    coast, and is full of little bays and beaches which are perfect for a quiet
    dip in the sea. We stayed in the village of Rogač, and hired bicycles for a
    very hot morning of island exploration. We cycled through some small
    villages, and then found a dirt road which eventually led us to a beautiful
    secluded bay for a well deserved swim.
  </p>
  <Gallery
    images={[{ src: 'img/croatia/croatia (100).jpg', alt: '' }, { src: 'img/croatia/croatia (99).jpg', alt: '' }]} />
  <p>
    We then rode to Maslinica, a small harbour town, for ice creams while we
    watched people and their yachts coming and going, before the cycle back to
    our villa.
  </p>

</BlogPost>
