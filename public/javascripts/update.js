document.querySelector("form").addEventListener("submit", e => {
   e.preventDefault();

const queryString = window.location.href;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('?');

let name = document.getElementById("updateName").value;
var price = document.getElementById("updatePrice").value;
var description = document.getElementById("updateDescription").value;

fetch('https://api.airtable.com/v0/appw9OO3eoSUmoKdt/Receipt%20Log?api_key=keyt35p1SiFUhVcYH', {
method: "PUT",
body: JSON.stringify({
id: id,
Name : name,
Total : parseInt(price),
Description : description
}),
headers: {
'Content-type': 'application/json; charset=UTF-8'
}

})
.then(response => response.json())
.then(json => console.log(json))

});