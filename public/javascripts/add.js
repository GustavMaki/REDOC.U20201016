document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();

url ='https://api.airtable.com/v0/appw9OO3eoSUmoKdt/Notes';

let name = document.getElementById("addName").value;
var price = document.getElementById("addPrice").value;
var description = document.getElementById("addDescription").value;

const addData = {
    "fields":{
        "Title" : name,
        "Content" : description
    }
}

fetch (url, {method: 'POST' , body: JSON.stringify(addData), 
headers: {'Authorization': 'Bearer keyt35p1SiFUhVcYH', 'Content-Type': 'application/json'}})
.then(response => response.json())
.then(json => console.log(json))
.catch(err => console.log (err));

});