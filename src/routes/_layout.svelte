<script>
  import SideMenu from "../components/SideMenu.svelte";
  export let segment;
</script>

<style>
  main {
    width: 100%;
    max-width: 600px;
    padding: 40px 20px;
  }
  .main-container {
    width: 100%;
    display: flex;
    justify-content: center;
  }
</style>

<SideMenu {segment} />

<div class="main-container" id="top">
  <main>
    <slot />
  </main>
</div>
