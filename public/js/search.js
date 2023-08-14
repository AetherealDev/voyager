function searchFormHandler() {
  
    const query = document.querySelector('#searchbar').value.trim();

    console.log(query);
  
    if (query) {
      let response = fetch('/location/', {
        method: 'GET',
        body: JSON.stringify({ query }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/response.location.id');
      } else {
        let response =  fetch('/api/users/', {
            method: 'GET',
            body: JSON.stringify({ query }),
            headers: { 'Content-Type': 'application/json' },
          });

          if (response.ok) {
            document.location.replace('/response.location.id');
          } else {
            alert('Failed to find location or user');
          }
      }
    }
  };
  


var e = document.querySelector('#searchbar').addEventListener('keydown', checkkey);


function checkkey(e)  {
    if(e.keyCode == 13){
        searchFormHandler();
    }
};