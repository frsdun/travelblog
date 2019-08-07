<script>
  export let segment;
  $: saveSegment = !segment ? "." : segment;

  let showMenu = false;
  function toggleMenu() {
    showMenu = !showMenu;
  }

  export let links = [
    { text: "Home", href: "." },
    { text: "2019 Namibia", href: "namibia" },
    { text: "2018 Croatia", href: "croatia" },
    { text: "2018 Vietnam", href: "vietnam" },
    { text: "2016 South America", href: "south-america" }
    // { text: "2015 Zanzibar", href: "zanzibar" },
    // { text: "2014 South East Asia", href: "s-e-a" }
  ];
</script>

<style>
  nav {
    height: 100%;
    width: 0;
    max-width: 300px;
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    background-color: rgb(224, 224, 224);
    color: rgb(65, 65, 65);
    overflow-x: hidden;

    transition: width 0.3s ease;
  }

  .selected {
    color: rgb(0, 0, 0);
  }

  .show {
    width: 100%;
  }

  /* x and up */
  @media only screen and (min-width: 900px) {
    nav {
      width: 100%;
    }
    :global(main) {
      margin-left: 300px;
    }
    .toggle-btn {
      display: none;
    }
  }
</style>

<button on:click={toggleMenu} class="toggle-btn">Menu</button>
<nav class={showMenu ? 'show' : ''}>
  <button on:click={toggleMenu} class="toggle-btn">Close</button>

  <ul>
    {#each links as link}
      <li>
        <a
          class={saveSegment === link.href ? 'selected' : ''}
          href={link.href}
          on:click={toggleMenu}>
          {link.text}
        </a>
      </li>
    {/each}
  </ul>

</nav>
