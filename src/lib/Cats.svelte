<script>
	import AnimalTable from '$lib/AnimalTable.svelte';
	import CatsDetails from '$lib/CatsDetails.svelte';
	import TableDetailsController from '$lib/TableDetailsController.svelte';

	let { cats } = $props();
	let detailsData = $state();

	const tableDetailsController = new TableDetailsController();
	function setDetailsData(data) {
		detailsData = data;
	}
</script>

<div class="flex-col">
	<div style="width: 10vw; align-self: center;">
		<CatsDetails
			data={detailsData}
			closeDetailsAction={tableDetailsController.closeDetailsAction}
		/>
	</div>
	<div>
		<h2>Cats</h2>
		<AnimalTable
			animals={cats}
			{setDetailsData}
			setDetailsAction={tableDetailsController.setDetailsAction}
		/>
	</div>
</div>
