<script>
  import BigIcon from "../lib/components/BigIcon.svelte";
  import { onMount } from "svelte";
  import Transition from "./Transition.svelte";

  let charge = true;
  let opacity = false;
  let bar = false;
  let bar_color = false;

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
  {:else}
    <div class="landing">
      <div class="pic" />
      <div class="sign">
        <div style={opacity ? "opacity:1;" : "opacity:0"} class="circle">
          <BigIcon icon_text={"check_small"} />
        </div>
        <h1>¡Incríble!</h1>
        <h4>Demostraste ser un profesional de la ciencia.</h4>
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
      </div>
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
    height: 450px;
    left: 38px;
    bottom: 529px;

    background: #ececec;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    border-radius: 27px;
    margin-bottom: 50px;
    grid-template-rows: 220px 70px 50px;
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
</style>
