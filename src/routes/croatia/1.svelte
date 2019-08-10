<script>
  import BlogPost from "../../components/BlogPost.svelte";
  import Gallery from "../../components/Gallery.svelte";
</script>

<BlogPost
  title="Zagreb"
  date={new Date(2018, 9 - 1, 9)}
  next="croatia/2"
  previous="croatia">

  <Gallery images={[{ src: 'img/croatia/croatia (6).jpg', alt: '' }]} />

  <p>
    We landed in Zagreb after a long flight from JHB via Dubai. Our first
    impression was one of peace. Dubai airport at 5.30am on a Sunday morning was
    horrendous chaos and a sensory overload. Zagreb airport, by contrast,
    small(er), new, spacious, well laid out and almost devoid of other people.
    It is also interesting architecturally:
    <a
      href="https://www.archdaily.com/870849/zagreb-airport-kincl-plus-neidhardt-plus-institut-igh">
      Archdaily.
    </a>
    The expert says it looks like a giant slug.
  </p>
  <p>
    We caught an Uber to our accommodation in town, and had an enthusiastic
    conversation about Croatia’s recent Fifa World Cup success with our driver
    (who also happens to be a fan of Mamelodi Sundowns, and has some strong
    opinions about Benni McCarthy).
  </p>
  <p>
    Zagreb was peaceful. It may have had something to do with the fact that it
    was a Sunday afternoon, and many of the shops were closed, but it was a
    pleasure exploring the streets and feeling like we almost had the place to
    ourselves. We took a walk through town to the Cathedral, and explored some
    of the pedestrianised streets of the city which are lined with restaurants
    and bars.
  </p>
  <Gallery
    images={[{ src: 'img/croatia/croatia (3).jpg', alt: '' }, { src: 'img/croatia/croatia (9).jpg', alt: '' }]} />

  <p>
    We also stumbled upon St Mark’s church, with striking roof tiles, before
    visiting the Museum of Broken Relationships. It houses objects from various
    relationships that have ended, and each object has a short story or
    description accompanying it. The stories range from absurd to sad to funny -
    my favourite being the description of an antique pocket-watch: “She said she
    loved all things old and broken. Turns out she didn’t. That’s probably why
    we’re no longer together.” There was also an axe displayed, which a jilted
    lover used to chop their ex-partners furniture into tiny pieces.
  </p>
  <Gallery
    images={[{ src: 'img/croatia/croatia (4).jpg', alt: '' }, { src: 'img/croatia/croatia (1).jpg', alt: '' }]} />

  <p>
    The next day we explored the picturesque Botanical Gardens, and the Croatian
    History Museum. We also found Gric Tunnel, which was built during WWII as a
    bomb shelter and promenade, which provided some relief from the heat of the
    city above.
  </p>
  <Gallery images={[{ src: 'img/croatia/croatia (7).jpg', alt: '' }]} />

</BlogPost>
