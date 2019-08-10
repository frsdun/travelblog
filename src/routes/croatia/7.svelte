<script>
  import BlogPost from "../../components/BlogPost.svelte";
  import Gallery from "../../components/Gallery.svelte";
</script>

<BlogPost
  title="Zadar"
  date={new Date(2018, 9 - 1, 15)}
  next="croatia/8"
  previous="croatia/6">
  <Gallery images={[{ src: 'img/croatia/croatia (74).jpg', alt: '' }]} />

  <p>
    We returned our trusty rental car, and made our way to Zadar. We were
    fortunate enough to have a fantastically located apartment in the bustling
    Old Town, across the road from the beautiful promenade, where we grabbed an
    ice-cream and watched the yachts go by. At one end of the promenade, there
    are two public art installations: The Sea Organ, and Greeting to the Sun.
  </p>

  <Gallery images={[{ src: 'img/croatia/croatia (78).jpg', alt: '' }]} />
  <Gallery images={[{ src: 'img/croatia/croatia (80).jpg', alt: '' }]} />
  <p>
    The Sea Organ is set into the steps of the boardwalk, and is composed of 35
    polyethylene tubes of varying diameter. As waves flood each tube underwater,
    displaced air is forced through large whistles tuned to play seven chords of
    five tones.
    <a href="https://www.youtube.com/watch?time_continue=68&v=QeGDjvCCkfk">
      Sea Organ
    </a>
  </p>
  <Gallery images={[{ src: 'img/croatia/croatia (76).jpg', alt: '' }]} />
  <Gallery images={[{ src: 'img/croatia/croatia (82).jpg', alt: '' }]} />
  <p>
    Greeting to the Sun is a circular arrangement of solar panel tiles set into
    the ground. They charge during the day, and at night light up in an array of
    coloured LED’s, captivating children and adults and selfie-posers alike.
  </p>

  <p>
    The next morning we woke up early for a swim in the Adriatic, before
    exploring the Old Town within the city walls. We started with The Forum, a
    square that was once a Roman marketplace. We visited the very impressive
    Archaeological Museum and the Museum of Ancient Glass, in between wondering
    round the fascinating narrow streets.
  </p>

  <Gallery
    images={[{ src: 'img/croatia/croatia (85).jpg', alt: '' }, { src: 'img/croatia/croatia (83).jpg', alt: '' }]} />
  <Gallery
    images={[{ src: 'img/croatia/croatia (84).jpg', alt: '' }, { src: 'img/croatia/croatia (75).jpg', alt: '' }]} />
  <Gallery images={[{ src: 'img/croatia/croatia (79).jpg', alt: '' }]} />

</BlogPost>
