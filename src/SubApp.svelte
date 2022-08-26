<script>
  import { afterUpdate } from "svelte";
  import { Router, Link, Route } from "svelte-routing";
  import Index from "./routes/IndexGlobal.svelte";
  import Wrong from "./routes/Wrong.svelte";
  import FirstQuestion from "./routes/FirstQuestion.svelte";
  import Line from "./routes/Line.svelte";
  import SecondQuestion from "./routes/SecondQuestion.svelte";
  import Succes from "./routes/Succes.svelte";
  import ThirdQuestion from "./routes/ThirdQuestion.svelte";
  import FourthQuestion from "./routes/FourthQuestion.svelte";
  import SuccesFinally from "./routes/SuccesFinally.svelte";

  let result = "";
  let route = 0;
  let state = 0;

  afterUpdate(() => {
    if (result === "https://www.experienciamuntref.untref.edu.ar/1") {
      route = 1;
      result = "";
      state = 0;
    } else if (result === "https://www.experienciamuntref.untref.edu.ar/2") {
      route = 2;
      result = "";
      state = 0;
    } else if (result === "https://www.experienciamuntref.untref.edu.ar/3") {
      route = 3;
      result = "";
      state = 0;
    } else if (result === "https://www.experienciamuntref.untref.edu.ar/4") {
      route = 4;
      result = "";
      state = 0;
    } else if (result.length > 4) {
      route = 0;
      result = "";
      state = 0;
    }
  });
</script>

<section>
  {#if state === 0}
    {#if route === 0}
      <Line
        handleClick={() => {
          state = 3;
        }}
      />
    {:else if route === 1}
      <FirstQuestion
        error={() => {
          state = 1;
        }}
        success={() => {
          state = 2;
        }}
      />
    {:else if route === 2}
      <SecondQuestion
        error={() => {
          state = 1;
        }}
        success={() => {
          state = 2;
        }}
      />
    {:else if route === 3}
      <ThirdQuestion
        success={() => {
          state = 2;
        }}
      />
    {:else if route === 4}
      <FourthQuestion
        success={() => {
          state = 4;
        }}
      />
    {/if}
  {:else if state === 1}
    <Wrong
      handleBack={() => {
        state = 0;
      }}
      bind:route={route}
    />
  {:else if state === 2}
    <Succes
      handleAdvanced={() => {
        state = 3;
      }}
            bind:route={route}
    />
  {:else if state === 3}
    <Index route={route + 1} bind:result />
  {:else if state === 4}
    <SuccesFinally />
  {/if}
</section>

<style>
  section {
    width: 100%;
    height: 60rem;
  }
</style>
