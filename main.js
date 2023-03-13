fetch("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=1120682b8d282743b6e2d0b9b86dfa2b&hash=f35698b40ba34103b57af598a88487fc")
.then((response) => response.json())
.then((result) => console.log(result));


const select = document.querySelector('#characters-select');
const photoDiv = document.querySelector('#character-photo');

fetch("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=1120682b8d282743b6e2d0b9b86dfa2b&hash=f35698b40ba34103b57af598a88487fc")
.then((response) => response.json())
.then((data) => {
  const characters = data.data.results;
  characters.forEach((character) => {
    const option = document.createElement('option');
    option.value = character.id;
    option.text = character.name;

    select.appendChild(option);
  });

  select.addEventListener('change', (event) => {
    const selectedId = event.target.value;
    const selectedCharacter = characters.find((character) => character.id === parseInt(selectedId));

    const img = document.createElement('img');
    img.src = `${selectedCharacter.thumbnail.path}.${selectedCharacter.thumbnail.extension}`;

    const nameHeading = document.querySelector('#character-name');
    nameHeading.textContent = selectedCharacter.name;

    const descriptionDiv = document.querySelector('#character-description');
    descriptionDiv.textContent = selectedCharacter.description;

    photoDiv.innerHTML = '';
    photoDiv.appendChild(img);
  });
});

