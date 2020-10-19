document.querySelector("form").addEventListener("submit", e => {
   e.preventDefault();

let name = document.getElementById("updateName").value;
var price = document.getElementById("updatePrice").value;
var description = document.getElementById("updateDescription").value;

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
id = urlParams.get('');

url =`https://api.airtable.com/v0/appw9OO3eoSUmoKdt/Receipt%20Log/${id}`;

const addData = {
   "fields":{
       "Name" : name,
       "Total" : parseInt(price),
       "Description" : description
   }
}

fetch (url, {method: 'PUT' , body: JSON.stringify(addData), 
headers: {'Authorization': 'Bearer keyt35p1SiFUhVcYH', 'Content-Type': 'application/json'}})
.then(response => response.json())
.then(json => console.log(json))
.catch(err => console.log (err));

});
