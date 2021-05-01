// Ajout des donnés à local storage

//Affichage des donnés d'un article avec la promesse et fetch

function resetHTML() {
    document.querySelector(".article-count").innerHTML = "";
    document.querySelector(".cart-article").innerHTML = "";
}

function displayCartHTML(cart) {
        resetHTML();
		for(let camera of cart){
            document.querySelector(".article-count").innerHTML += `<h2 class="font-weight-bold nb-articles">{camera.quantity.summ } articles</h2>`,
            document.querySelector(".cart-article").innerHTML += `<div class="row card-body">
                                                                    <picture class="col border-right">
                                                                        <img src="${camera.cameraImage}" class="card-img-left" id="img_panier" alt="Caméra vintage" title="Caméra vintage Orinoco" />
                                                                    </picture>
                                                                    <div class="col option-container">
                                                                        <div class="col">
                                                                            <!-- Le nom et choix de lentille -->
                                                                            <div class="row choise-container pl-3">
                                                                                <h2 class="card-title font-weight-bold">${camera.cameraName} - </h2>
                                                                            </div>
                                                                            <!-- Le prix de caméra multiplié par quantité choisie -->
                                                                            <h2 class="article-price font-weight-bold mt-2">${camera.cameraPrice} €</h2>
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
                                                                                    <button type="button" class="btn bin btn-outline-secondary mx-1 btn-remove-article" data-id-article="${camera.cameraId}">
                                                                                        <span>
                                                                                            <i class="far fa-trash-alt"></i>
                                                                                        </span>
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>`;
        }
    };
    
function setEventsListeners() {
   
    window.onload = function(){ // Fonctions exécutés dés le chargement de la page
        // Le bouton d'ajout au panier
        const removeArticleButtons = document.getElementsByClassName("btn-remove-article");
        console.log("remove articles buttons ", removeArticleButtons);
        for(let i=0; i<removeArticleButtons.length; i++){ 
            removeArticleButtons[i].addEventListener("click", function(e) {
                e.preventDefault();
                console.log("id article cliqué", e.target.dataset.idArticle);
                
                const cameraId = e.target.dataset.idArticle;
                removeCameraInCart(cameraId);
            });
        };
    }
}
      
const cart = JSON.parse(localStorage.getItem("cart"));
if (cart != null) {
    console.log("cart", cart);
    displayCartHTML(cart);
    setEventsListeners();
}

