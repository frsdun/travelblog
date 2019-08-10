<script>
  import BlogPost from "../../components/BlogPost.svelte";
  import Gallery from "../../components/Gallery.svelte";
</script>

<BlogPost
  title="Pag and Nin"
  date={new Date(2018, 9 - 1, 15)}
  next="croatia/7"
  previous="croatia/5">

  <Gallery images={[{ src: 'img/croatia/croatia (72).jpg', alt: '' }]} />
  <p>
    For our last day with the rental car, we drove down the coast to Zadar,
    stopping at two small towns and an old fortress along the way.
  </p>
  <Gallery
    images={[{ src: 'img/croatia/croatia (61).jpg', alt: '' }, { src: 'img/croatia/croatia (62).jpg', alt: '' }]} />
  <Gallery images={[{ src: 'img/croatia/croatia (73).jpg', alt: '' }]} />
  <p>
    First was the town of Pag, described as having around 8 000 inhabitants who
    tend to three times as many sheep. The town lies on a barren island (the
    sheep have eaten everything), and it's claim to fame is sheep's milk cheese
    it produces. We wondered around the historical part of town, and visited the
    lace museum; lace-making being Pag’s other claim to fame.
  </p>
  <Gallery images={[{ src: 'img/croatia/croatia (69).jpg', alt: '' }]} />

  <p>
    We also popped into the salt museum, which was rather underwhelming. The
    curator wistfully told us that the process of salt making had been automated
    “because the young people don't want to work so hard anymore, they want to
    work as receptionists in hotels instead". As if previously people loved
    raking salt pans all day in the glaring, baking 30+ degree heat for less
    than minimum wage.
  </p>
  <Gallery
    images={[{ src: 'img/croatia/croatia (63).jpg', alt: '' }, { src: 'img/croatia/croatia (64).jpg', alt: '' }]} />
  <p>
    The next stop was Nin, a small but historically fascinating town. It was the
    residence of early Croatian kings, and the seat of an archbishop from 879
    AD. In the 1600’s, the town was burnt and evacuated by the Venetians in
    attempt to resist Ottoman advances. There are a number of Roman remains
    still scattered about Nin, including “the smallest cathedral in the world”,
    the Church of the Holy Cross. We had an interesting walk around town and the
    Archeological Museum.
  </p>
  <Gallery images={[{ src: 'img/croatia/croatia (65).jpg', alt: '' }]} />
  <Gallery
    images={[{ src: 'img/croatia/croatia (71).jpg', alt: '' }, { src: 'img/croatia/croatia (66).jpg', alt: '' }]} />

</BlogPost>
