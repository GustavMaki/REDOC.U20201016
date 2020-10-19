document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();
 
 const queryString = window.location.search;
 const urlParams = new URLSearchParams(queryString);
 id = urlParams.get('');
 
 url =`https://api.airtable.com/v0/appw9OO3eoSUmoKdt/Receipt%20Log/${id}`;
 
 fetch(url, {
  method: 'DELETE',
  headers: {'Authorization': 'Bearer keyt35p1SiFUhVcYH', 'Content-Type': 'application/json'}
})
.then(res => res.text()) 
.then(res => console.log(res))
.catch(err => console.log(err));
 
 
 
});