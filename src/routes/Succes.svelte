<script>
  import BigIcon from "../lib/components/BigIcon.svelte";	
  import { onMount, afterUpdate } from "svelte";
  import Transition from "./Transition.svelte";
  export let handleAdvanced = null;
  export let route = 0;

  let charge = true;
  let opacity = false;
  let text = "";


  onMount(() => {
    setTimeout(() => {
      charge = false;
      setTimeout(() => {
        opacity = true;
      }, 100);
    }, 2400);
  });

  afterUpdate(() => {
    if (route === 1) {
      text = "Seguí demostrando tus conocimientos.";
    } else if (route === 2) {
      text = "Se ve que estuviste prestando atención!";
    } else if (route === 3) {
      text = "Que inteligente!";
    }
	else if (route === 4) {
      text = "INCREIBLE!";
    }
  });
</script>

<section>
  {#if charge}
    <Transition />
  {:else}
    <div class="landing">
      <div class="pic" />
      <div class="sign">
        <div style={opacity ? "opacity:1;" : "opacity:0"} class="circle">
          <BigIcon icon_text={"check_small"} />
        </div>
        <h1>¡Felicitaciones!</h1>
        <h3>{text}</h3>
      </div>
      <button on:click={handleAdvanced}>
        <div style="position: relative;">Continuar</div>
      </button>
    </div>
  {/if}
</section>

<style>
  section {
    background: #ececec;
    height: 100%;
    width: 100%;
  }
  .landing {
    display: grid;
    grid-template-rows: 140px 450px 80px;
    grid-template-areas: "a" "b" "c";
    height: 100%;
  }
  .sign {
    display: grid;
    grid-area: b;
    align-self: center;
    justify-self: center;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 394px;
    left: 38px;
    bottom: 529px;

    background: #ececec;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    border-radius: 27px;
    margin-bottom: 50px;
    grid-template-rows: 220px 70px 1fr;
  }
  h3 {
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 25px;
    text-align: center;
    color: black;
    margin: 0;
    display: grid;
    align-self: start;
  }
  h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 48px;
    text-align: center;
    color: black;
    margin: 0;
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
    background: linear-gradient(270.24deg, #ff8a00 2.21%, #872c90 99.79%);
    border-radius: 13px;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    border: none;
    color: white;
  }
  .circle {
    transition: all 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
    width: 190px;
    height: 190px;
    border: none;
    background: rgb(255, 138, 0);
    background: linear-gradient(
      16deg,
      rgba(255, 138, 0, 1) 0%,
      rgba(166, 0, 255, 1) 49%,
      rgba(35, 137, 208, 1) 85%
    );
    border-radius: 150.5px;
    display: grid;
    position: relative;
    align-items: center;
    justify-content: center;
    align-self: center;
    justify-self: center;
  }
</style>
