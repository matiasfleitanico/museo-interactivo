<script>
	import Spinner from '../lib/components/Spinner.svelte';
	import { onMount } from 'svelte';
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
            <div class="pic"></div>
			<div class="sign" ><h3>Question about image</h3></div>
            <div class="image">
                <button class="image--1" on:click={success}></button>
                <button class="image--2" on:click={error}></button>
                <div></div>
                <button class="image--3" on:click={error}></button>
                <div></div>
            </div>
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
		grid-template-rows: 130px 200px 400px;
		height: 100%;
	}
	.sign {
		display: grid;
		align-self: center;
		justify-self: center;
		width: 80%;
		height: 150px;
		left: 38px;
		bottom: 529px;

		background: #ececec;
		box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
			rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
		border-radius: 27px;
	}
	h3 {
		font-style: normal;
		font-weight: 400;
		font-size: 24px;
		line-height: 48px;
		text-align: center;
        color: black;
		margin: 0;
	}
    .image {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        padding: 15px;
        grid-gap:3px;
        grid-template-areas: 
        "image_1 image_1 image_2 image_2"
        "a image_3 image_3 b"
    }
	button {
		display: grid;
		align-self: center;
		justify-self: center;
		align-items: center;
		width: 100%;
		height: 100%;
		left: 41px;
		bottom: 159px;
		background: #ececec;
		box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
		rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
		border-radius: 13px;
		font-weight: 400;
		font-size: 24px;
		line-height: 29px;
		border: none;
	}
    .image--1 {
        grid-area: image_1;
    }
    .image--2 {
        grid-area: image_2;
    }
    .image--3 {
        grid-area: image_3;
    }
</style>
