<script>
  import NextBar from "./NextBar.svelte";

  // Blog info
  export let title = "";
  export let date = "";

  // NextBar info
  export let next = "";
  export let previous = "";
  export let start = "";
  export let end = "";

  function formateDate(date) {
    if (date instanceof Date) {
      const month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      return (
        date.getDate() + " " + month[date.getMonth()] + " " + date.getFullYear()
      );
    } else {
      return date;
    }
  }
</script>

<style>
  .date {
    color: grey;
  }
</style>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<NextBar {previous} {next} {start} {end} />

<h1>{title}</h1>
{#if date !== ''}
  <p class="date">{formateDate(date)}</p>
{/if}

<slot>Content...</slot>

<NextBar {previous} {next} {start} {end} />
