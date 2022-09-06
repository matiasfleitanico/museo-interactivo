<script>
  import BigIcon from "../lib/components/BigIcon.svelte";
  import { onMount } from "svelte";
  import Transition from "./Transition.svelte";

  let charge = true;
  let opacity = false;
  let bar = false;
  let bar_color = false;
  let step = 1;

  onMount(() => {
    setTimeout(() => {
      charge = false;
      setTimeout(() => {
        opacity = true;
        bar = true;
        setTimeout(() => {
          bar_color = true;
        }, 300);
      }, 100);
    }, 2400);
  });
</script>

<section>
  {#if charge}
    <Transition />
  {:else if step === 1}
    <div class="landing">
      <div class="pic" />
      <div class="sign">
        <div style={opacity ? "opacity:1;" : "opacity:0"} class="circle">
          <BigIcon icon_text={"check_small"} />
        </div>
        <h1>¡Incríble!</h1>
        <h4>Demostraste ser profesional de la ciencia.</h4>
        <div class="content--bar">
          <div class="progress">
            <div
              style={bar
                ? "width: 100%;".concat(
                    bar_color
                      ? "background:linear-gradient(160deg, rgba(215, 122, 35, 1) 0%, rgba(136, 3, 180, 1) 100%);"
                      : ""
                  )
                : ""}
              class="bar"
            />
          </div>
        </div>
        <button
          on:click={() => {
            step = 2;
          }}>CONTINUAR</button
        >
      </div>
      <div style="margin-top: 50px;" class="abajo" />
    </div>
  {:else}
    <div class="final">
      <h1 class="h_final">Gracias por sumarte a la experiencia!</h1>

      <h2 class="h_final">Esperamos que la hayas disfrutado.</h2>

      <div class="icon_final">
        <span class="material-symbols-outlined"> science </span>
        <span class="material-symbols-outlined"> sports_esports </span>
      </div>

      <h2 class="h_final">Te invitamos a seguir recorriendo la exposición,</h2>

      <h2 class="h_final">al final tenemos una propuesta más para vos!</h2>

      
      <div style="margin-top: 50px;" class="abajo" />
    </div>

    <div />
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
    height: 550px;
    left: 38px;
    bottom: 529px;

    background: #ececec;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    border-radius: 27px;
    margin-bottom: 50px;
    grid-template-rows: 220px 70px 50px 110px 50px;
  }
  h4 {
    font-style: normal;
    font-weight: 400;
    font-size: medium;
    line-height: 25px;
    text-align: center;
    color: black;
    margin: 0 45px;
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
    color: white !important;
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
  .content--bar {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .progress {
    width: 70%;
    height: 20px;
    border: red 5px solid;
    border-image: linear-gradient(to right, #d77a23, darkorchid) 1;
    border-radius: 40px;
    padding: 5px;
  }
  .bar {
    width: 1px;
    height: 100%;
    background: rgb(215, 122, 35);
    background: linear-gradient(
      108deg,
      rgba(215, 122, 35, 1) 0%,
      rgba(136, 3, 180, 1) 100%
    );
    transition: all 2s cubic-bezier(0.075, 0.82, 0.165, 1);
  } 

  .final {
    padding-top: 50px;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: rgb(255, 138, 0);
    background: linear-gradient(
      16deg,
      rgba(255, 138, 0, 1) 0%,
      rgba(166, 0, 255, 1) 49%,
      rgba(35, 137, 208, 1) 85%
    );
    height: 100%;
    color: white;
  }
  .h_final {
    padding: 25px;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
  }
  .icon_final {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    font-weight: 400;
  }

  .material-symbols-outlined{
    font-size: 3rem;
  }
  
</style>
