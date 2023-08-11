const searchFormHandler = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();
  
    // Gather the data from the form elements on the page
    const query = document.querySelector('#searchbar').value.trim();

    console.log(query);
  
    if (query) {
      const response = await fetch('/api/users/', {
        method: 'POST',
        body: JSON.stringify({ query }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/response.user.id');
      } else {
        alert('Failed to find user');
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