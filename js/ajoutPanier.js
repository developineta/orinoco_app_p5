// Ajout des donnés à local storage

//Affichage des donnés d'un article avec la promesse et fetch

const url = "http://localhost:3000/api/cameras/";

fetch(url)
    .then((data) => data.json())
    .then( jsonCameras => {
		for(let jsonCamera of jsonCameras){
			let camera = new Camera(jsonCamera);
            document.querySelector(".article-count").innerHTML += `<h2 class="font-weight-bold nb-articles">{camera.quantity.summ } articles</h2>`,
            document.querySelector(".cart-article").innerHTML += `<div class="row card-body">
                                                                    <picture class="col border-right">
                                                                        <img src="${camera.imageUrl}" class="card-img-left" id="img_panier" alt="Caméra vintage" title="Caméra vintage Orinoco" />
                                                                    </picture>
                                                                    <div class="col option-container">
                                                                        <div class="col">
                                                                            <!-- Le nom et choix de lentille -->
                                                                            <div class="row choise-container pl-3">
                                                                                <h2 class="card-title font-weight-bold">${camera.name} - </h2>
                                                                                <h3 id="title-choice">${camera.lenses [0]}</h3>
                                                                            </div>
                                                                            <!-- Le prix de caméra multiplié par quantité choisie -->
                                                                            <h2 class="article-price font-weight-bold mt-2">${(camera.price/100).toFixed(2).replace(".",",")} €</h2>
                                                                            <div class="input-group options-quantity my-3">
                                                                                <div class="input-group-prepend">
                                                                                    <label class="input-group-text" for="select-quantity">Quantité :</label>
                                                                                </div>
                                                                                <div class="row quantite-delete">
                                                                                    <select class="custom-select quantity-choise" id="select-quantity">
                                                                                        <option selected>1</option>
                                                                                        <option value="1">2</option>
                                                                                        <option value="2">3</option>
                                                                                    </select>
                                                                                    <button type="button" class="boutonSupprimer btn bin btn-outline-secondary mx-1">
                                                                                        <span>
                                                                                            <i class="far fa-trash-alt"></i>
                                                                                        </span>
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>`;
        };
    })
  .catch(function(error) {
    console.log(error);
  });

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