fetch("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=1120682b8d282743b6e2d0b9b86dfa2b&hash=f35698b40ba34103b57af598a88487fc")
.then((response) => response.json())
.then((result) => console.log(result));

// ------------------------------------ PREMIERE METHODE --------------------------------------------------------------------------------------

// // Sélectionne l'élément HTML avec l'ID "characters-select"
// const select = document.querySelector('#characters-select');

// // Sélectionne l'élément HTML avec l'ID "character-photo"
// const photoDiv = document.querySelector('#character-photo');

// // Effectue une requête GET vers l'API Marvel
// fetch("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=1120682b8d282743b6e2d0b9b86dfa2b&hash=f35698b40ba34103b57af598a88487fc")
//   // Traite la réponse de la requête en convertissant la réponse en JSON
//   .then((response) => response.json())
//   // Traite les données JSON retournées par l'API
//   .then((data) => {
//     // Extrayez les personnages de la réponse de l'API
//     const characters = data.data.results;

//     // Parcourt chaque personnage et crée une option dans le menu déroulant pour le sélectionner
//     characters.forEach((character) => {
//       const option = document.createElement('option');
//       option.value = character.id;
//       option.text = character.name;
//       select.appendChild(option);
//     });

//     // Ajoute un écouteur d'événements pour le changement de sélection dans le menu déroulant
//     select.addEventListener('change', (event) => {
//       // Obtenez l'ID du personnage sélectionné
//       const selectedId = event.target.value;
//       // Trouvez le personnage correspondant à l'ID sélectionné
//       const selectedCharacter = characters.find((character) => character.id === parseInt(selectedId));

//       // Créez un élément img pour afficher l'image du personnage sélectionné
//       const img = document.createElement('img');
//       img.src = `${selectedCharacter.thumbnail.path}.${selectedCharacter.thumbnail.extension}`;

//       // Met à jour le nom et la description du personnage sélectionné
//       const nameHeading = document.querySelector('#character-name');
//       nameHeading.textContent = selectedCharacter.name;

//       const descriptionDiv = document.querySelector('#character-description');
//       descriptionDiv.textContent = selectedCharacter.description;

//       // Efface l'élément enfant de l'élément photoDiv pour le remplacer par l'image sélectionnée
//       photoDiv.innerHTML = '';
//       photoDiv.appendChild(img);
//     });
//   });

//--------------------------------- DEUXIEME METHODE -----------------------------------------------------------------------------------

// Sélectionne l'élément HTML avec l'ID "characters-select"
const select = document.querySelector('#characters-select');

// Sélectionne l'élément HTML avec l'ID "character-photo"
const photoDiv = document.querySelector('#character-photo');

// Effectue une requête GET vers l'API Marvel
fetch("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=1120682b8d282743b6e2d0b9b86dfa2b&hash=f35698b40ba34103b57af598a88487fc")
  // Traite la réponse de la requête en convertissant la réponse en JSON
  .then(response => response.json())
  // Traite les données JSON retournées par l'API
  .then(data => {
    // Extrayez les personnages de la réponse de l'API
    const characters = data.data.results;

    // Pour chaque personnage, créez une option dans le menu déroulant pour le sélectionner
    for (const character of characters) {
      const option = new Option(character.name, character.id);
      select.add(option);
    }

    // Ajoute un écouteur d'événements pour le changement de sélection dans le menu déroulant
    select.addEventListener('change', () => {
      // Obtenez l'ID du personnage sélectionné
      const selectedId = select.value;
      // Trouvez le personnage correspondant à l'ID sélectionné
      const selectedCharacter = characters.find(character => character.id === parseInt(selectedId));

      // Affichez l'image du personnage sélectionné
      photoDiv.innerHTML = `<img src="${selectedCharacter.thumbnail.path}.${selectedCharacter.thumbnail.extension}">`;

      // Affichez le nom et la description du personnage sélectionné
      document.querySelector('#character-name').textContent = selectedCharacter.name;
      document.querySelector('#character-description').textContent = selectedCharacter.description;
    });
  });

