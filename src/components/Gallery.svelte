<script>
  export let images = [{ src: "src", alt: "alt" }];
  //ratio = width / height

  let modalSrc = { src: "", alt: "" };

  function setRatio(e) {
    let width = e.target.offsetWidth;
    let height = e.target.offsetHeight !== 0 ? e.target.offsetHeight : 1;
    let ratio = width / height;
    e.target.style.flex = String(ratio);
  }

  function showModal(src, alt) {
    modalSrc.src = src;
    modalSrc.alt = alt;
  }
  function hideModal() {
    modalSrc.src = "";
    modalSrc.alt = "";
  }
</script>

<style>
  .gallery {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: flex-start;
  }
  img {
    margin: 2px;
    cursor: pointer;
  }

  .modal-show {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 20;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
  .modal-hide {
    display: none;
  }
  .modal-image {
    display: block;
    max-width: 600px;
    margin-bottom: 10px;

    transform: scale(1.2, 1.2);

    -webkit-box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 1);
    -moz-box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 1);
    box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 1);
  }
  span {
    display: block;
    color: white;
    text-align: center;
  }

  /* Factor in the menu showing on larger screens. x and up */
  @media only screen and (min-width: 900px) {
    .modal-show {
      margin-left: 150px;
    }
  }
</style>

<div class="gallery">
  <div
    class={modalSrc.src.length > 0 ? 'modal-show' : 'modal-hide'}
    on:click={hideModal}>
    <div>

      <img
        src={modalSrc.src}
        alt={modalSrc.alt}
        on:click={hideModal}
        class="modal-image" />
      <span>{modalSrc.alt}</span>
    </div>
  </div>
  {#each images as image}
    <img
      src={image.src}
      alt={image.alt}
      on:load={setRatio}
      on:click={() => showModal(image.src, image.alt)} />
  {/each}
</div>
