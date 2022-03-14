// api url
const api_url =
	"http://sgp-20.enviromc.net:25568/v1/players";

// Defining async function
async function getapi(url) {
	
	// Storing response
	const response = await fetch("http://sgp-20.enviromc.net:25568/v1/players");
	
	// Storing data in form of JSON
	var data = await response.json();
	console.log(data);
	if (response) {
		hideloader();
	}
	show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
	document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
	let tab =
		`<thead>
	
		<tr>
		<th>Name</th>
		<th>playtime</th>
		<th>Last seen</th>
		<th>Date of registration</th>
	
		</tr></thead>`;
	
	// Loop to access all rows
	for (let r of data.data) {
		tab += `<tbody><tr>
	<td>${r.name} </td>
	<td>${r.activePlaytime.d}</td>
	<td>${r.seen.d}</td>
	<td>${r.registered.d}</td>

	</tr></tbody>`;
	}
	console.log(data)
	// Setting innerHTML as tab variable
	document.getElementById("employees").innerHTML = tab;
}

function myFunction() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("employees");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
