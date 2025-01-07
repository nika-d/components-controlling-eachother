<script>
	let { data, closeDetailsAction } = $props();
</script>

{#if data}
	<div class="details" style="width:100%; font-family: 'Comic Sans MS'">
		<button onclick={() => (data = null)} use:closeDetailsAction>{data?.shout}</button>
		<button style="background-color: brown">next cat</button>
	</div>
{/if}
