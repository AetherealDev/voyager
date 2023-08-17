const locationQueryHandler = async (event) => {
  event.preventDefault();
  if(event.keyCode == 13) {
    const query = document.querySelector('#location-query').value.trim();

    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${query}&key=AIzaSyCqjhYV8ffqPgXEqIxcVXpJZNu-acyOxEs`;

    fetch(url, {
      method: 'GET',
    })
    .then(function (res) {
      if(res.ok) {
        res.json().then(function (data) {
          renderQuery(data.results[0].place_id);
        });
      } else {
        console.log(`${res.status} - ${res.statusText}`);
      }
    })
    .catch(function (err) {
      console.log(err);
    });
  }
};

const renderQuery = async (placeId) => {
  const response = await fetch(`/feed/search/${placeId}`, {
    method: 'GET',
  });

  if(response.ok) {
    console.log(response);
  } else {
    alert('Failed to fetch location.');
  }
};

document.querySelector('#location-query').addEventListener('keyup', locationQueryHandler);