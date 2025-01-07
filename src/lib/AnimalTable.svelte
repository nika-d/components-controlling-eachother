<script>
	let { animals, setDetailsAction, setDetailsData } = $props();
</script>

<table>
	<tbody>
		{#each animals as animal}
			<tr use:setDetailsAction={() => ({ setDetailsData, data: animal })}>
				<td>{animal.icon}</td>
				<td>{animal.name}</td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	tr {
		td:first-child {
			font-size: 2rem;
		}

		&:hover > td:nth-child(2) {
			background-color: #d2e1e4;
		}
	}
</style>
