var fetchHeaders = new Headers();
fetchHeaders.append('pragma', 'no-cache');
fetchHeaders.append('cache-control', 'no-cache');

var fetchInit = {
	method: 'GET',
	headers: fetchHeaders,
};

var expressions = "";

async function loadExpressions() {
	expressions = await fetch("data/expressions.json", fetchInit).then(response => response.json());
	expressions.forEach(expression => {
		$(".expression-list-anchor").append(`
			<tr class="table-active">
				<td>
					<button type="button" class="btn btn-primary btn-sm" data="${expression.id}">Insert</button>
				</td>
				<td>${expression.name}</td>
				<td>${expression.description}</td>
			</tr>
		`);
	});
}

function insertExpression(id){

}

loadExpressions();