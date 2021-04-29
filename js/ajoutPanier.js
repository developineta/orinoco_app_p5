// Ajout des donnés à local storage

//Affichage des donnés d'un article avec la promesse et fetch
function getCameraById(cameraId) {
  return fetch("http://localhost:3000/api/cameras/" + cameraId)
      .then(data => data.json());
}
window.onload = function(){ // Fonctions exécutés dés le chargement de la page
    // Le bouton d'ajout au panier
    const addToCartButton = document.getElementsByClassName("addToCart");
    console.log("Add to cart button ", addToCartButton);
    for(let i=0; i<addToCartButton.length; i++){ 
        addToCartButton[i].addEventListener("click", function(e) {
            console.log("Montre bouton à chaque click ", e.target);
            
        });
    };
}