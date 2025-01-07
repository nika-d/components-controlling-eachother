let detailsSourceNode = null;
export default class TableDetailsController {
	setDetailsAction(node, fn) {
		const { setDetailsData, data } = fn();

		function setDetails(event) {
			if (detailsSourceNode) detailsSourceNode.classList.remove('active');
			detailsSourceNode = event.target;
			detailsSourceNode.classList.add('active');
			setDetailsData(data);
			//...
		}

		$effect(() => {
			node.addEventListener('click', setDetails);
			return () => {
				node.removeEventListener('click', setDetails);
			};
		});
	}

	closeDetailsAction(node) {
		function resetDetailsSourceNodeColor() {
			if (detailsSourceNode) detailsSourceNode.classList.remove('active');
		}

		$effect(() => {
			node.addEventListener('click', resetDetailsSourceNodeColor);
			return () => {
				node.removeEventListener('click', resetDetailsSourceNodeColor);
			};
		});
	}
}
