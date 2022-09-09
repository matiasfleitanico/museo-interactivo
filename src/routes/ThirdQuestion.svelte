<script>
	import Spinner from '../lib/components/Spinner.svelte';
	import { afterUpdate, onMount } from 'svelte';
	export let success = null;

	let exact_1 = false;
	let exact_2 = false;
	let exact_3 = false;

	let charge = true;
	let response_1 = '';
	let response_2 = '';
	let response_3 = '';
	let response_1_letters = [];
	let response_2_letters = [];
	let response_3_letters = [];

	function firstFocus() {
		document.getElementById("first").focus();
	}

	function secondFocus() {
		document.getElementById("second").focus();
	}

	function thirdFocus() {
		document.getElementById("third").focus();
	}

	onMount(() => {
		setTimeout(() => {
			charge = false;
		}, 1000);
	});

	afterUpdate(() => {
		if(response_1.toUpperCase()  === "PRIMARIOS" ){
			exact_1 = true;
		} else {
			exact_1 = false
		}

		if(response_2.toUpperCase() === "COLORES"){
			exact_2 = true;
		} else {
			exact_2 = false
		}
		if(response_3.toUpperCase() === "VERDE"){
			exact_3 = true;
		} else {
			exact_3 = false
		}

		for (let i = 0; i < 9; i++) {
			response_1_letters[i] = response_1.slice(i, i + 1);
		}
		for (let i = 0; i < 7; i++) {
			response_2_letters[i] = response_2.slice(i, i + 1);
		}
		for (let i = 0; i < 5; i++) {
			response_3_letters[i] = response_3.slice(i, i + 1);
		}
		if(exact_1 && exact_2 && exact_3){
			success();
		}
	});
</script>

<section>
	{#if charge}
		<Spinner />
	{:else}
		<div class="landing">
			<div class="pic" />
			<div class="sign">
				<h3>3) TEORÍA DEL COLOR DE LA LUZ. <br>
					Crucigrama:
					</h3>
				<div class="game">
					<div on:click={firstFocus} style={exact_1 ? "border: 1px solid green;" : ""} class="box__1">
						<span>2</span> <h3>{response_1_letters[0]}</h3>
					</div>
					<div on:click={secondFocus} style={exact_2 ? "border: 1px solid green;" : ""} class="box__2"><span>3</span><h3>{response_2_letters[0]}</h3></div>
					<div on:click={firstFocus} style={exact_1 ? "border: 1px solid green;" : ""} class="box__3"><h3>{response_1_letters[1]}</h3></div>
					<div  on:click={secondFocus} style={exact_2 ? "border: 1px solid green;" : ""} class="box__4"><h3>{response_2_letters[1]}</h3></div>
					<div on:click={firstFocus} style={exact_1 ? "border: 1px solid green;" : ""} class="box__5"><h3>{response_1_letters[2]}</h3></div>
					<div  on:click={secondFocus} style={exact_2 ? "border: 1px solid green;" : ""} class="box__6"><h3>{response_2_letters[2]}</h3></div>
					<div  on:click={firstFocus} style={exact_1 ? "border: 1px solid green;" : ""} class="box__7"><h3>{response_1_letters[3]}</h3></div>
					<div on:click={secondFocus} style={exact_2 ? "border: 1px solid green;" : ""} class="box__8"><h3>{response_2_letters[3]}</h3></div>
					<div style={exact_1 ? "border: 1px solid green;" : ""} class="box__9"><h3>{response_1_letters[4]}</h3></div>
					<div  on:click={secondFocus} style={exact_2 ? "border: 1px solid green;" : ""} class="box__10"><h3>{response_2_letters[4]}</h3></div>
					<div on:click={thirdFocus} style={exact_3 ? "border: 1px solid green;" : ""} class="box__11"><span>1</span><h3>{response_3_letters[0]}</h3></div>
					<div on:click={thirdFocus} style={exact_3 ? "border: 1px solid green;" : ""} class="box__12"><h3>{response_3_letters[1]}</h3></div>
					<div on:click={thirdFocus} style={exact_3 || exact_1 ? "border: 1px solid green;" : ""} class="box__13">
						<h3>
							{response_3_letters[2] && response_1_letters[5]
								? response_3_letters[2] === response_1_letters[5]
									? response_3_letters[2]
									: 'X'
								: response_3_letters[2]
								? response_3_letters[2]
								: response_1_letters[5]
								? response_1_letters[5]
								: ''}
						</h3>
					</div>
					<div style={exact_3 ? "border: 1px solid green;" : ""} class="box__14"><h3>{response_3_letters[3]}</h3></div>
					<div on:click={thirdFocus} style={exact_3 ? "border: 1px solid green;" : ""} class="box__15">
						<h3>
							{response_3_letters[4] && response_2_letters[5]
								? response_3_letters[4] === response_2_letters[5]
									? response_3_letters[4]
									: 'X'
								: response_3_letters[4]
								? response_3_letters[4]
								: response_2_letters[5]
								? response_2_letters[5]
								: ''}
						</h3>
					</div>
					<div on:click={firstFocus} style={exact_1 ? "border: 1px solid green;" : ""} class="box__16"><h3>{response_1_letters[6]}</h3></div>
					<div on:click={secondFocus} style={exact_2 ? "border: 1px solid green;" : ""} class="box__17"><h3>{response_2_letters[6]}</h3></div>
					<div on:click={firstFocus} style={exact_1 ? "border: 1px solid green;" : ""} class="box__18"><h3>{response_1_letters[7]}</h3></div>
					<div on:click={thirdFocus} style={exact_1 ? "border: 1px solid green;" : ""} class="box__19"><h3>{response_1_letters[8]}</h3></div>
				</div>
				<div class="consigna">
					<div class="content">
						<p on:click={thirdFocus}>
							1. Los tres colores que perciben nuestros ojos, a través de los receptores, son el
							azul, el
							<input id="third" bind:value={response_3} maxlength="5" class="text__1" type="text" />
							y el rojo
						</p>
						<p on:click={firstFocus}>
							2. Estos colores son conocidos como: Colores
							<input id="first" bind:value={response_1} maxlength="9" class="text__1" type="text" />
						</p>
						<p on:click={secondFocus}>
							3. La luz blanca y la luz que llega del sol contiene todos los
							<input id="second" bind:value={response_2} maxlength="7" class="text__1" type="text" />
						</p>
					</div>
				</div>
			</div>
			<div style="margin-top: 70px;" class="abajo"></div>
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
		grid-template-rows: 50px 700px 50px;
		height: 100%;
	}
	.sign {
		display: grid;
		align-self: center;
		justify-self: center;
		width: 80%;
		height: 600px;
		left: 38px;
		bottom: 529px;

		background: #ececec;
		box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
			rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
		border-radius: 27px;
		grid-template-rows: 50px 1fr 160px;
		padding: 45px;
		margin: 25px;
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
		grid-template-columns: repeat(5, 35px);
		grid-template-rows: repeat(9, 35px);
		grid-template-areas:
			'a b b1 c b_2 '
			'd e b_3 f b_4 '
			'g h b_5 i b_6 '
			'j k b_7 l b_8 '
			'm n b_9 o b_10 '
			'b_11 b_12 b_13 b_14 b_15'
			'p q b_16 r b_17'
			's t b_18 u v'
			'w x b_19 y z';
		color: black;
		text-transform:uppercase;
	}

	.box__1 {
		z-index: 100;
		width: 35px;
		height: 35px;
		border: 1px solid black;
		grid-area: b1;
	}

	.box__2 {
		width: 35px;
		height: 35px;
		border: 1px solid black;
		grid-area: b_2;
	}

	.box__3 {
		width: 35px;
		height: 35px;
		border: 1px solid black;
		grid-area: b_3;
	}

	.box__4 {
		width: 35px;
		height: 35px;
		border: 1px solid black;
		grid-area: b_4;
	}

	.box__5 {
		width: 35px;
		height: 35px;
		border: 1px solid black;
		grid-area: b_5;
	}
	.box__6 {
		width: 35px;
		height: 35px;
		border: 1px solid black;
		grid-area: b_6;
	}

	.box__7 {
		width: 35px;
		height: 35px;
		border: 1px solid black;
		grid-area: b_7;
	}

	.box__8 {
		width: 35px;
		height: 35px;
		border: 1px solid black;
		grid-area: b_8;
	}

	.box__9 {
		width: 35px;
		height: 35px;
		border: 1px solid black;
		grid-area: b_9;
	}

	.box__10 {
		width: 35px;
		height: 35px;
		border: 1px solid black;
		grid-area: b_10;
	}
	.box__11 {
		width: 35px;
		height: 35px;
		border: 1px solid black;
		grid-area: b_11;
	}

	.box__12 {
		width: 35px;
		height: 35px;
		border: 1px solid black;
		grid-area: b_12;
	}

	.box__13 {
		width: 35px;
		height: 35px;
		border: 1px solid black;
		grid-area: b_13;
	}

	.box__14 {
		width: 35px;
		height: 35px;
		border: 1px solid black;
		grid-area: b_14;
	}

	.box__15 {
		width: 35px;
		height: 35px;
		border: 1px solid black;
		grid-area: b_15;
	}
	.box__16 {
		width: 35px;
		height: 35px;
		border: 1px solid black;
		grid-area: b_16;
	}

	.box__17 {
		width: 35px;
		height: 35px;
		border: 1px solid black;
		grid-area: b_17;
	}

	.box__18 {
		width: 35px;
		height: 35px;
		border: 1px solid black;
		grid-area: b_18;
	}

	.box__19 {
		width: 35px;
		height: 35px;
		border: 1px solid black;
		grid-area: b_19;
	}
	span {
		position: absolute;
	}
	.text__1 {
		background-color: transparent;
		border: none;
		outline: none;
		width: 100px;
		font-size: small;
		color: rgb(0, 149, 151);
		text-transform:uppercase;
		border-bottom: black 2px solid;
	}
	p {
		color: black;
		margin: 0;
	}
</style>
