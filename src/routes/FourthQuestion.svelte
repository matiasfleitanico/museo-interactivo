<script>
  import Spinner from "../lib/components/Spinner.svelte";
  import { afterUpdate, onMount } from "svelte";
  import { cubes } from "../lib/cubes";
  export let success = null;

  let exact_1 = false;
  let exact_2 = false;
  let exact_3 = false;

  let charge = true;
  let response_1 = "";
  let response_2 = "";
  let response_3 = "";
  let word_global_1 = false;
  let word_global_2 = false;
  let word_global_3 = false;
  let word_global_4 = false;
  let word_1 = {
    l1: false,
    l2: false,
    l3: false,
    l4: false,
    l5: false,
    l6: false,
    l7: false,
    l8: false,
    l9: false,
  };
  let word_2 = {
    l1: false,
    l2: false,
    l3: false,
    l4: false,
    l5: false,
    l6: false,
    l7: false,
    l8: false,
    l9: false,
    l10: false,
    l11: false,
    l12: false,
    l13: false,
    l14: false,
  };
  let word_3 = {
    l1: false,
    l2: false,
    l3: false,
    l4: false,
    l5: false,
    l6: false,
  };
  let word_4 = {
    l1: false,
    l2: false,
    l3: false,
    l4: false,
    l5: false,
  };

  function firstFocus() {
    document.getElementById("first").focus();
    console.log(document.getElementById("first"));
  }

  function secondFocus() {
    document.getElementById("second").focus();
    console.log(document.getElementById("first"));
  }

  function thirdFocus() {
    document.getElementById("third").focus();
    console.log(document.getElementById("third"));
  }

  onMount(() => {
    setTimeout(() => {
      charge = false;
    }, 1000);
  });

  function printSecondWord() {
    for (let i = 0; i < cubes.length; i++) {
      if (cubes[i]["id"] === "a3") {
        cubes[i]["succes"] = true;
      }
      if (cubes[i]["id"] === "b3") {
        cubes[i]["succes"] = true;
      }
      if (cubes[i]["id"] === "c3") {
        cubes[i]["succes"] = true;
      }
      if (cubes[i]["id"] === "d3") {
        cubes[i]["succes"] = true;
      }
      if (cubes[i]["id"] === "e3") {
        cubes[i]["succes"] = true;
      }
      if (cubes[i]["id"] === "f3") {
        cubes[i]["succes"] = true;
      }
      if (cubes[i]["id"] === "g3") {
        cubes[i]["succes"] = true;
      }
      if (cubes[i]["id"] === "h3") {
        cubes[i]["succes"] = true;
      }
      if (cubes[i]["id"] === "i3") {
        cubes[i]["succes"] = true;
      }
      if (cubes[i]["id"] === "j3") {
        cubes[i]["succes"] = true;
      }
      if (cubes[i]["id"] === "k3") {
        cubes[i]["succes"] = true;
      }
      if (cubes[i]["id"] === "l3") {
        cubes[i]["succes"] = true;
      }
      if (cubes[i]["id"] === "m3") {
        cubes[i]["succes"] = true;
      }
      if (cubes[i]["id"] === "n3") {
        cubes[i]["succes"] = true;
      }
    }
  }

  function printFirstWord() {
    for (let i = 0; i < cubes.length; i++) {
      if (cubes[i]["id"] === "a1") {
        cubes[i]["succes"] = true;
      }
      if (cubes[i]["id"] === "b1") {
        cubes[i]["succes"] = true;
      }
      if (cubes[i]["id"] === "c1") {
        cubes[i]["succes"] = true;
      }
      if (cubes[i]["id"] === "d1") {
        cubes[i]["succes"] = true;
      }
      if (cubes[i]["id"] === "e1") {
        cubes[i]["succes"] = true;
      }
      if (cubes[i]["id"] === "f1") {
        cubes[i]["succes"] = true;
      }
      if (cubes[i]["id"] === "g1") {
        cubes[i]["succes"] = true;
      }
      if (cubes[i]["id"] === "h1") {
        cubes[i]["succes"] = true;
      }
      if (cubes[i]["id"] === "i1") {
        cubes[i]["succes"] = true;
      }
    }
  }
  function printThirdWord() {
    for (let i = 0; i < cubes.length; i++) {
      if (cubes[i]["id"] === "j5") {
        cubes[i]["succes"] = true;
      }
      if (cubes[i]["id"] === "k5") {
        cubes[i]["succes"] = true;
      }
      if (cubes[i]["id"] === "l5") {
        cubes[i]["succes"] = true;
      }
      if (cubes[i]["id"] === "m5") {
        cubes[i]["succes"] = true;
      }
      if (cubes[i]["id"] === "n5") {
        cubes[i]["succes"] = true;
      }
      if (cubes[i]["id"] === "o5") {
        cubes[i]["succes"] = true;
      }
    }
  }

  function printFourthWord() {
    for (let i = 0; i < cubes.length; i++) {
      if (cubes[i]["id"] === "q1") {
        cubes[i]["succes"] = true;
      }
      if (cubes[i]["id"] === "q2") {
        cubes[i]["succes"] = true;
      }
      if (cubes[i]["id"] === "q3") {
        cubes[i]["succes"] = true;
      }
      if (cubes[i]["id"] === "q4") {
        cubes[i]["succes"] = true;
      }
      if (cubes[i]["id"] === "q5") {
        cubes[i]["succes"] = true;
      }
    }
  }

  function secondWord() {
    if (
      word_2.l1 === true &&
      word_2.l2 === true &&
      word_2.l3 === true &&
      word_2.l4 === true &&
      word_2.l5 === true &&
      word_2.l6 === true &&
      word_2.l7 === true &&
      word_2.l8 === true &&
      word_2.l9 === true &&
      word_2.l10 === true &&
      word_2.l11 === true &&
      word_2.l12 === true &&
      word_2.l13 === true &&
      word_2.l14 === true
    ) {
      printSecondWord();
      word_global_2 = true;
    }
  }

  function thirdWord() {
    if (
      word_3.l1 === true &&
      word_3.l2 === true &&
      word_3.l3 === true &&
      word_3.l4 === true &&
      word_3.l5 === true &&
      word_3.l6 === true
    ) {
      printThirdWord();
      word_global_3 = true;
    }
  }

  function fourthWord() {
    if (
      word_4.l1 === true &&
      word_4.l2 === true &&
      word_4.l3 === true &&
      word_4.l4 === true &&
      word_4.l5 === true
    ) {
      printFourthWord();
      word_global_4 = true;
    }
  }

  function firstWord() {
    if (
      word_1.l1 === true &&
      word_1.l2 === true &&
      word_1.l3 === true &&
      word_1.l4 === true &&
      word_1.l5 === true &&
      word_1.l6 === true &&
      word_1.l7 === true &&
      word_1.l8 === true &&
      word_1.l9 === true
    ) {
      printFirstWord();
      word_global_1 = true;
    }
  }
  afterUpdate(() => {
    for (let i = 0; i < cubes.length; i++) {
      //FIRST WORD
      if (cubes[i]["active"] === true) {
        if (cubes[i]["id"] === "a1") {
          word_1.l1 = true;
          firstWord();
        }
        if (cubes[i]["id"] === "b1") {
          word_1.l2 = true;
          firstWord();
        }
        if (cubes[i]["id"] === "c1") {
          word_1.l3 = true;
          firstWord();
        }
        if (cubes[i]["id"] === "d1") {
          word_1.l4 = true;
          firstWord();
        }
        if (cubes[i]["id"] === "e1") {
          word_1.l5 = true;
          firstWord();
        }
        if (cubes[i]["id"] === "f1") {
          word_1.l6 = true;
          firstWord();
        }
        if (cubes[i]["id"] === "g1") {
          word_1.l7 = true;
          firstWord();
        }
        if (cubes[i]["id"] === "h1") {
          word_1.l8 = true;
          firstWord();
        }
        if (cubes[i]["id"] === "i1") {
          word_1.l9 = true;
          firstWord();
        }

        // SECOND WORD
        if (cubes[i]["id"] === "a3") {
          word_2.l1 = true;
          secondWord();
        }
        if (cubes[i]["id"] === "b3") {
          word_2.l2 = true;
          secondWord();
        }
        if (cubes[i]["id"] === "c3") {
          word_2.l3 = true;
          secondWord();
        }
        if (cubes[i]["id"] === "d3") {
          word_2.l4 = true;
          secondWord();
        }
        if (cubes[i]["id"] === "e3") {
          word_2.l5 = true;
          secondWord();
        }
        if (cubes[i]["id"] === "f3") {
          word_2.l6 = true;
          secondWord();
        }
        if (cubes[i]["id"] === "g3") {
          word_2.l7 = true;
          secondWord();
        }
        if (cubes[i]["id"] === "h3") {
          word_2.l8 = true;
          secondWord();
        }
        if (cubes[i]["id"] === "i3") {
          word_2.l9 = true;
          secondWord();
        }
        if (cubes[i]["id"] === "j3") {
          word_2.l10 = true;
          secondWord();
        }
        if (cubes[i]["id"] === "k3") {
          word_2.l11 = true;
          secondWord();
        }
        if (cubes[i]["id"] === "l3") {
          word_2.l12 = true;
          secondWord();
        }
        if (cubes[i]["id"] === "m3") {
          word_2.l13 = true;
          secondWord();
        }
        if (cubes[i]["id"] === "n3") {
          word_2.l14 = true;
          secondWord();
        }

        //THIRD WORD
        if (cubes[i]["id"] === "j5") {
          word_3.l1 = true;
          thirdWord();
        }
        if (cubes[i]["id"] === "k5") {
          word_3.l2 = true;
          thirdWord();
        }
        if (cubes[i]["id"] === "l5") {
          word_3.l3 = true;
          thirdWord();
        }
        if (cubes[i]["id"] === "m5") {
          word_3.l4 = true;
          thirdWord();
        }
        if (cubes[i]["id"] === "n5") {
          word_3.l5 = true;
          thirdWord();
        }
        if (cubes[i]["id"] === "o5") {
          word_3.l6 = true;
          thirdWord();
        }
        //FOURTH WORD
        if (cubes[i]["id"] === "q1") {
          word_4.l1 = true;
          fourthWord();
        }
        if (cubes[i]["id"] === "q2") {
          word_4.l2 = true;
          fourthWord();
        }
        if (cubes[i]["id"] === "q3") {
          word_4.l3 = true;
          fourthWord();
        }
        if (cubes[i]["id"] === "q4") {
          word_4.l4 = true;
          fourthWord();
        }
        if (cubes[i]["id"] === "q5") {
          word_4.l5 = true;
          fourthWord();
        }
      }
    }
    if (
      word_global_1 === true &&
      word_global_2 === true &&
      word_global_3 === true &&
      word_global_4 === true
    ) {
      success();
    }
  });
</script>

<section>
  <!-- {#if charge}
		<Spinner />
	{:else} -->
  <div class="landing">
    <div class="pic" />
    <div class="sign">
      <h3>
        4) Acerca de: CURVATURA DE LA TIERRA <br />
        Sopa de letras con palabras relacionadas al experimento:
      </h3>
      <div class="game">
        {#each cubes as cube}
          <div
            on:click={() => {
              cube["active"] = !cube["active"];
            }}
            style={cube["active"]
              ? cube["succes"]
                ? "background: green"
                : "background: black;"
              : cube["succes"]
              ? "background: green"
              : ""}
            class="box"
          >
            <h3
              style={cube["active"]
                ? "color:white"
                : cube["succes"]
                ? "color:white;"
                : ""}
            >
              {cube.letter}
            </h3>
          </div>
        {/each}
      </div>
    </div>
  </div>
  <!-- {/if} -->
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
    grid-template-rows: 50px 750px 50px;
    height: 100%;
  }
  .sign {
    display: grid;
    align-self: center;
    justify-self: center;
    width: 80%;
    height: 800px;
    left: 38px;
    bottom: 529px;

    background: #ececec;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    border-radius: 27px;
    grid-template-rows: 130px 1fr 160px;
    padding: 45px;
  }
  h3 {
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: auto;
    text-align: center;
    color: black;
    margin: 0;
  }
  .game {
    display: grid;
    height: 100%;
    position: relative;
    align-items: center;
    align-content: center;
    justify-content: center;
    grid-template-columns: repeat(5, 60px);
    grid-template-rows: repeat(9, 35px);
    color: black;
    text-transform: uppercase;
  }

  .box {
    z-index: 100;
    width: 60px;
    height: 35px;
    border: 1px solid black;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .text__1 {
    background-color: transparent;
    border: none;
    outline: none;
    width: 100px;
    font-size: medium;
    color: rgb(0, 149, 151);
    text-transform: uppercase;
  }
  p {
    color: black;
    margin: 0;
  }
</style>
