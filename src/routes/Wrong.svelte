<script>
	import BigIcon from '../lib/components/BigIcon.svelte';
	import Spinner from '../lib/components/Spinner.svelte';
	import { onMount } from 'svelte';
	export let handleBack = null;

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
				<div class="circle"><BigIcon icon_text={'mood_bad'} /></div>
				<h1>Wrong!</h1>
				<h3>This answer was wrong</h3>
			</div>
			<button on:click={handleBack}>
				<div style="position: relative;">
					<span class="material-symbols-outlined"> arrow_back </span>
					Volver a intentar
				</div>
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
		grid-template-rows: 140px 450px 80px;
		grid-template-areas: 'a' 'b' 'c';
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
		box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
			rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
		border-radius: 27px;
		margin-bottom: 50px;
		grid-template-rows: 220px 70px 1fr;
	}
	h3 {
		font-style: normal;
		font-weight: 400;
		font-size: 24px;
		line-height: 48px;
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
		background: #3e3e3e;
		box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
			rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
		border-radius: 13px;
		font-weight: 400;
		font-size: 24px;
		line-height: 29px;
		border: none;
		color: white;
	}
	span {
		position: absolute;
		left: 15px;
		top: 2px;
	}
	.circle {
		width: 190px;
		height: 190px;
		background: rgb(217, 130, 130);
		background: linear-gradient(
			0deg,
			rgba(217, 130, 130, 0.7150210425967262) 0%,
			rgba(199, 32, 32, 1) 100%
		);
		border-radius: 500px;
		display: grid;
		position: relative;
		align-items: center;
		justify-content: center;
		align-self: center;
		justify-self: center;
	}
</style>
