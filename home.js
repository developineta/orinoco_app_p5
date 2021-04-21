//L'affichage de la page d'accueil

let jsondata = fetch("http://localhost:3000/api/cameras")
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => alert("Erreur : " + error));