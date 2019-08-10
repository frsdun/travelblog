<script>
  import BlogPost from "../../components/BlogPost.svelte";
  import Gallery from "../../components/Gallery.svelte";
</script>

<BlogPost
  title="Plitvice Lakes National Park"
  date={new Date(2018, 9 - 1, 13)}
  next="croatia/5"
  previous="croatia/3">

  <Gallery images={[{ src: 'img/croatia/croatia (48).jpg', alt: '' }]} />
  <p>
    Plitvice Lakes is one of the largest and most visited tourist destinations
    in the country, and as such we were expecting some tourist crowds. The
    reviews we read described long queues of people all trying to take photos on
    narrow wooden boardwalks. In order to mitigate this, we left hot and humid
    Starigrad at 5:30am in order to be at the park for opening at 7am. As we
    drove, the outside temperature dropped and dropped until on arrival, it was
    7.5 degrees. We have been used to temperatures of 25+ degrees so this was
    somewhat of a shock. We donned our thin fleeces and waited for the sun to
    warm us up.
  </p>
  <Gallery images={[{ src: 'img/croatia/croatia (40).jpg', alt: '' }]} />
  <Gallery
    images={[{ src: 'img/croatia/croatia (44).jpg', alt: '' }, { src: 'img/croatia/croatia (46).jpg', alt: '' }]} />
  <Gallery images={[{ src: 'img/croatia/croatia (50).jpg', alt: '' }]} />
  <Gallery
    images={[{ src: 'img/croatia/croatia (51).jpg', alt: '' }, { src: 'img/croatia/croatia (54).jpg', alt: '' }]} />
  <p>
    The park consists of 16 terraced lakes which cascade into each other in a
    series of waterfalls, with amazing crystal clear turquoise water when viewed
    from certain angles.
  </p>
  <Gallery
    images={[{ src: 'img/croatia/croatia (38).jpg', alt: '' }, { src: 'img/croatia/croatia (49).jpg', alt: '' }]} />
  <Gallery images={[{ src: 'img/croatia/croatia (52).jpg', alt: '' }]} />
  <p>
    We successfully managed to avoid majority of the crowds and selfie-takers,
    and had a glorious time exploring the walkways in the park and marvelling at
    the beautiful scenery.
  </p>
  <Gallery
    images={[{ src: 'img/croatia/croatia (55).jpg', alt: '' }, { src: 'img/croatia/croatia (53).jpg', alt: '' }]} />
  <!-- <Gallery images={[{ src: 'img/croatia/croatia (45).jpg', alt: '' }]} /> -->

</BlogPost>
