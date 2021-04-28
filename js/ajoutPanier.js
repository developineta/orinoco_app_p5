// Ajout des donnés à local storage

// Le bouton d'ajout au panier

window.onload = function(){ // Fonctions exécutés dés le chargement de la page
    const addToCartButton = document.getElementsByClassName("addToCart");
    console.log("Add to cart button ", addToCartButton);
    for(let i=0; i<addToCartButton.length; i++){ 
        addToCartButton[i].addEventListener("click", function(show)
    console.log('Montre bouton ', show.target));
    }
}