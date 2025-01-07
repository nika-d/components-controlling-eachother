<script>
	import AnimalTable from '$lib/AnimalTable.svelte';

	let { zoo } = $props();
</script>

<div class="flex-col">
	<div>
		<h2>Zoo</h2>
		<div class="flex-col">
			{#each zoo as part}
				<div>
					<h3>{part.family}</h3>
					<AnimalTable animals={part.members} />
				</div>
			{/each}
		</div>
	</div>
	<img
		alt={zoo[1].members[3].name}
		class="details"
		src={zoo[1].members[3].img}
		style="width:20vw; align-self: center;"
	/>
</div>
