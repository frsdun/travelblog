<script>
  import BlogPost from "../../components/BlogPost.svelte";
  import Gallery from "../../components/Gallery.svelte";
</script>

<BlogPost
  title="Mount Medvednica"
  date={new Date(2018, 9 - 1, 11)}
  next="croatia/3"
  previous="croatia/1">

  <p>
    We decided to escape the city on the third day, and caught a tram to the
    base of the nearby Mount Medvednica (“Bear Mountain”). We started our hike
    from suburbias edge at the end of the tram line, and wound our way through
    the forest, passing a derelict fort and a tennis court on the lower slopes.
    We soon joined one of the wider, main routes to the summit, which made for
    pleasant walking with a gentle incline through beautiful green forests, and
    with ample rest stops along the way. The summit of the mountain functions as
    a ski resort in winter, but in summer looks rather strange and sad, with
    ramshackle huts and stacks of ski-lift chairs piled around.
  </p>
  <Gallery
    images={[{ src: 'img/croatia/croatia (16).jpg', alt: '' }, { src: 'img/croatia/croatia (18).jpg', alt: '' }]} />
  <Gallery
    images={[{ src: 'img/croatia/croatia (17).jpg', alt: '' }, { src: 'img/croatia/croatia (10).jpg', alt: '' }]} />
  <Gallery
    images={[{ src: 'img/croatia/croatia (20).jpg', alt: '' }, { src: 'img/croatia/croatia (19).jpg', alt: '' }]} />
  <p>
    We found a shady spot for lunch, and set off down a steeper, rockier path,
    eventually reaching Medvedgrad Fortress. The castle was unfortunately closed
    for renovation, but some kind contractors allowed us a quick peek inside the
    walls.
  </p>
  <p>
    Back in town in the afternoon, we paid a visit to the Technical Museum,
    which showcases various technological inventions ranging from steam engines
    and watermills to fire engines through the ages. There is also an exhibition
    and demonstration dedicated to Nikola Tesla, Croatia / Serbia’s most famous
    inventor (depending who you ask), complete with a demonstration of 3 million
    volts of electricity from a Tesla coil. Supper followed with burgers, local
    beer and a dose of people watching.
  </p>
  <Gallery images={[{ src: 'img/croatia/croatia (12).jpg', alt: '' }]} />
  <Gallery
    images={[{ src: 'img/croatia/croatia (13).jpg', alt: '' }, { src: 'img/croatia/croatia (14).jpg', alt: '' }]} />
  <Gallery images={[{ src: 'img/croatia/croatia (11).jpg', alt: '' }]} />

</BlogPost>
