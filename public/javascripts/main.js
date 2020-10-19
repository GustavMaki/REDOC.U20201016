url =`https://api.airtable.com/v0/appw9OO3eoSUmoKdt/Receipt%20Log?api_key=keyt35p1SiFUhVcYH`;

fetch(url)
     .then(response => response.json())
     .then(data => {
        const { records} = data;
  
        for(var i=0; i < data.records.length ; i++){
        const li = document.createElement("li");
        li.classList.add("utgifter");

  
        const markup = `
          <div id= "result">
              <p>Namn: ${data.records[i].fields.Name} | Pris: ${data.records[i].fields.Total} $<p> 
              <button name="update" type="submit" value="${data.records[i].id}">Update</button>
              <button name="update" type="submit" value="${data.records[i].id}">Delete</button>
          </div>
        `;
       
        li.innerHTML = markup;
        document.getElementById("utgifter").appendChild(li);
     }
      })
    
     
    