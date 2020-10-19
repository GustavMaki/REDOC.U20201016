return fetch('https://airtable.com/tblaqz1Qcb2OUbTVp/viwd6xEcQWuKZurcX?blocks=hide', {
        method: 'DELETE',
        id: button.pressed
       
    }).then(response => response.json())
