<script>
	import Cats from '$lib/Cats.svelte';

	let { data } = $props();
</script>

<h1>Table rows controlling other elements</h1>
<div class="flex-col">
	<div>
		<Cats cats={data.cats} />
	</div>
	<!--<div>
		<Zoo zoo={data.zoo} />
	</div>-->
</div>

<style>
	:global(.flex-col) {
		display: flex;
		justify-content: space-evenly;
		gap: 3rem;
	}

	:global(.details) {
		border-radius: 3px;
		box-shadow: 0 0 0.5rem rgba(55, 68, 119, 0.66);
		background-color: white;
		min-height: 2rem;
		max-height: 20rem;
		max-width: 20rem;
		padding: 1rem;
		text-align: center;
	}

	:global(.active) {
		background-color: #abd5dc;
	}

	:root {
		font-family: 'Apple SD Gothic Neo', sans-serif;
		background-color: rgb(244, 239, 236);
	}
</style>
