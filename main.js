
const url = 'https://gateway.marvel.com/v1/public/characters';
const apiKey = '1120682b8d282743b6e2d0b9b86dfa2b';
  
  fetch(`${url}?apikey=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      // Faire quelque chose avec les données renvoyées par l'API
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });
  
