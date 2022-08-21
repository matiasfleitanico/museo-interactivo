<script>
	import Header from '../lib/components/Header.svelte';
	import Footer from '../lib/components/Footer.svelte';
	import Scanner from '../lib/components/Scanner.svelte';

	export let result; 
	export let route;
</script>

<Header bind:number={route} />

<main>
	<!-- <Scanner active={!result} onSuccessfulScan={(qrCodeData) => result = qrCodeData} let:result > -->
	<Scanner bind:result />

	<!-- override default by placing handler in middle  -->
	<!-- <Results active={result !== null} decodedData={result} onNewScan={() => result = null} /> -->
	<!-- For example: -->

</main>

<Footer />
