<script>
  import Spinner from "../lib/components/Spinner.svelte";
  import { onMount } from "svelte";
  export let success = null;
  export let error = null;

  let charge = true;

  onMount(() => {
    setTimeout(() => {
      charge = false;
    }, 1000);
  });
</script>

<section>
  {#if charge}
    <Spinner />
  {:else}
    <div class="landing">
      <div class="pic" />
      <div class="sign">
        <h6>
          <b>
            Al alumbrar un objeto con una linterna,<br />¿Qué se puede ver en la
            pared que se encuentra detrás de él?</b
          >
        </h6>
      </div>
      <button on:click={error}>La luz de la linterna </button>
      <button on:click={error}>La sombra que produce el objeto</button>
      <button on:click={success}>Ambas
	</button>
    </div>
  {/if}
</section>

<style>
  section {
    background: rgb(255, 138, 0);
    background: linear-gradient(
      16deg,
      rgba(255, 138, 0, 1) 0%,
      rgba(166, 0, 255, 1) 49%,
      rgba(35, 137, 208, 1) 85%
    );
    height: 100%;
    width: 100%;
  }
  .landing {
    display: grid;
    grid-template-rows: 40px 250px 80px 80px 80px;
    height: 100%;
  }
  .sign {
    display: grid;
    align-self: center;
    justify-self: center;
    width: 80%;
    height: auto;
    left: 38px;
    bottom: 529px;

    background: #ececec;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    border-radius: 27px;
  }
  h6 {
    font-style: normal;
    font-weight: 400;
    font-size: medium;
    line-height: 30px;
    text-align: center;
    color: black;
    margin: 35px 18px;
  }
  button {
    display: grid;
    align-self: center;
    justify-self: center;
    align-items: center;
    width: 80%;
    height: 59px;
    left: 41px;
    bottom: 159px;
    background: #ececec;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    border-radius: 13px;
    font-weight: 400;
    font-size: medium;
    line-height: 29px;
    border: none;
  }
</style>
