// Ajout des donnés à local storage

//Affichage des donnés d'un article avec la promesse et fetch

function resetHTML() {
    document.querySelector(".article-count").innerHTML = "";
    document.querySelector(".cart-article").innerHTML = "";
};

// Affichage de chaque article dans le panier
function displayCartHTML(cart) {
        resetHTML();
		for(let camera of cart){
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

// Affichage du formulaire s'il y a des articles dans le panier
function displayFormHTML() {
    document.querySelector(".contact-validation").innerHTML += `<div class="formulaire col m-auto">
                                                                    <h3 class="col-11 font-weight-bold mb-4">Merci de remplir le formulaire pour passer la commande</h3>
                                                                    <!-- Le formulaire de contact avec options de Bootsrap -->
                                                                    <div class="formulaire-valide"> 
                                                                        <form class="contact-form" novalidate>
                                                                            <div class="form-row">
                                                                                <div class="col-md-6 mb-3">
                                                                                    <label for="firstName">Prénom</label>
                                                                                    <!-- Peut contenir que les lettres majuscules et minuscules; minimum 2 et maximim 20 carachtères -->
                                                                                    <input type="text" class="form-control" id="firstName" placeholder="Prénom" value="Arthur" maxlength="20" pattern="[A-Za-zÀ-ÿ ]{2,20}" required>
                                                                                    <span class="error" aria-live="polite"></span>
                                                                                </div>
                                                                                <div class="col-md-6 mb-3">
                                                                                    <label for="lastName">Nom</label>
                                                                                    <input type="text" class="form-control" id="lastName" placeholder="Nom" value="Legrand" maxlength="20" pattern="[A-Za-zÀ-ÿ ]{2,20}" required>
                                                                                </div>
                                                                            </div>
                                                                            <div class="form-row">
                                                                                <div class="col-md-12 mb-3">
                                                                                    <label for="address">Adresse</label>
                                                                                    <!-- Peut contenir que les lettres majuscules, minuscules, chiffres, tiret et virgule; minimum 5 et maximim 80 carachtères -->
                                                                                    <input type="text" class="form-control" id="address" placeholder="Voie, résidence, appartement, complément..." maxlength="80" value="Rue Paoli, 2 appartement 11" pattern="[A-Za-zÀ-ÿ0-9 -,]{5,80}" required>
                                                                                </div>
                                                                            </div>
                                                                            <div class="form-row">
                                                                                <div class="col-md-6 mb-3">
                                                                                    <label for="city">Ville</label>
                                                                                    <!-- Peut contenir que les lettres majuscules, minuscules et tiret; minimum 3 et maximim 40 carachtères -->
                                                                                    <input type="text" class="form-control" id="city" placeholder="Ville" value="Bastia" maxlength="40" pattern="[A-Za-zÀ-ÿ-]{3,40}" required>
                                                                                    <div class="invalid-feedback">Reinseignez la ville.</div>
                                                                                </div>
                                                                                <div class="form-group col-md-6">
                                                                                    <label for="email">E-mail</label>
                                                                                    <!-- Le pattern d'e-mail qui doit être une combinaison comme suit dans la balise -->
                                                                                    <input type="email" class="form-control" id="email" placeholder="E-mail" value="adresse@mail.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+[.][a-z]{2,4}" required>
                                                                                </div>
                                                                            </div>
                                                                            <div class="validation col mt-3">
                                                                                <div class="row total-price m-auto py-4">
                                                                                    <h2 class="text-uppercase my-0 mr-3">Total</h2>
                                                                                    <p class="text-uppercase my-0 mr-3">tva incluse</p>
                                                                                    <h2 class="article-price font-weight-bold my-0">{{ Camera.price * Camera.quantity }} €</h2>
                                                                                </div>
                                                                                <button type="submit" onClick="location.href='confirmation.html'" class="col-9 col-lg-6 col-xl-4 btn btn-primary btn-lg btn-block m-auto" title="Commander">
                                                                                    <span class="font-weight-bold py-2">Commander</span>
                                                                                </button>
                                                                                <div class="col payment-methods mt-5 mb-2">
                                                                                    <ul class="row list-unstyled">
                                                                                        <li class="mx-3">
                                                                                            <i class="fab fa-cc-paypal"></i>
                                                                                        </li>
                                                                                        <li class="mx-3">
                                                                                            <i class="fab fa-cc-visa"></i>
                                                                                        </li>
                                                                                        <li class="mx-3">
                                                                                            <i class="fab fa-cc-mastercard"></i>
                                                                                        </li>
                                                                                        <li class="mx-3">
                                                                                            <i class="fab fa-cc-amex"></i>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                </div>`;
};

// Affichage de nombre d'articles dans le panier
function countCartArticles() {
    displayFormHTML();
    document.querySelector(".article-count").innerHTML += `<h2 class="font-weight-bold nb-articles"> Nombre d'articles : ${cart.length}</h2>`
};

// Affiche le message de panier vide
function displayEmptyCartMessage() {
    document.querySelector(".contenu-page").innerHTML += `<h2 class="message-panier-vide text-center">Votre panier est vide !</h2>`
};
    
function setEventsListeners() {
   
    window.onload = function(){ // Fonctions exécutés dés le chargement de la page
        // Le bouton de suppression
        const removeArticleButtons = document.getElementsByClassName("btn-remove-article");
        console.log("remove articles buttons ", removeArticleButtons);
        for(let i=0; i<removeArticleButtons.length; i++){ 
            removeArticleButtons[i].addEventListener("click", function(e) {
                e.preventDefault();
                console.log("id article cliqué", e.target.dataset.idArticle);
                
                // Recupère No Id de caméra
                const cameraId = e.target.dataset.idArticle;
                removeCameraInCart(cameraId); 
                localStorage.removeItem(cameraId);
                console.log("removed article ", removeCameraInCart);
                    /*removeArticleButtons.addEventListener("click", function(g) {
                        g.preventDefault();
                        storage.removeItem(cameraId);
                        console.log("removed article ", removeArticleButtons);
                    })*/
            });
        }
    }
};
      
const cart = JSON.parse(localStorage.getItem("cart"));
if (cart != null) {
    console.log("cart", cart);
    displayCartHTML(cart);
    setEventsListeners();
    countCartArticles();
};
if (cart == null) {
    console.log("cart est vide !");
    displayEmptyCartMessage();
}




