const searchFormHandler = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();
  
    // Gather the data from the form elements on the page
    const query = document.querySelector('#searchbar').value.trim();

    console.log(query);
  
    if (query) {
      let response = await fetch('/api/location/', {
        method: 'GET',
        body: JSON.stringify({ query }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/response.location.id');
      } else {
        let response = await fetch('/api/users/', {
            method: 'GET',
            body: JSON.stringify({ query }),
            headers: { 'Content-Type': 'application/json' },
          });

          if (response.ok) {
            document.location.replace('/response.location.id');
          } else {
            alert('Failed to location or user');
          }
      }
    }
  };
  
  document
    .querySelector('#searchbar')
    .addEventListener('keydown', checkkey);

function checkkey(e)  {
    if(e.keyCode == 13){
        searchFormHandler();
    }
};