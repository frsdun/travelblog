<script>
  export let previous = "";
  export let next = "";
  export let start = "";
  export let end = "";
</script>

<style>
  nav {
    display: flex;
    justify-content: space-between;
    margin: 30px 0;
  }
</style>

<nav>
  {#if previous !== ''}
    <a href={previous}>Previous</a>
  {:else if start !== ''}
    <a href={start}>Back</a>
  {:else}
    <span />
  {/if}

  {#if next !== ''}
    <a href={next}>Next</a>
  {:else if end !== ''}
    <a href={end}>End</a>
  {:else}
    <span>End</span>
  {/if}
</nav>
