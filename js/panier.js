//Affichage des donnés d'un article

function resetHTML() {
    document.querySelector(".article-count").innerHTML = "";
    document.querySelector(".cart-article").innerHTML = "";
};

// Affichage de chaque article dans le panier
function displayCartHTML(cart) {
        resetHTML();
		for(let camera of cart){
            document.querySelector(".cart-article").innerHTML += `<div class="row card-body card-body-cart px-0 pt-2 pb-1 border">
                                                                    <picture class="col px-0 text-center border-right">
                                                                        <img src="${camera.cameraImage}" class="card-img-left" id="img_panier" alt="Caméra vintage" title="Caméra vintage Orinoco" />
                                                                    </picture>
                                                                    <div class="col px-0 option-container">
                                                                        <div class="col text-card">
                                                                            <!-- Le nom et choix de lentille -->
                                                                            <h2 class="card-title font-weight-bold">${camera.cameraName}</h2>
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
                                                                        <form class="contact-form" id="formulaire" novalidate>
                                                                            <div class="form-row">
                                                                                <div class="col-md-6 mb-3">
                                                                                    <label for="firstName">Prénom</label>
                                                                                    <!-- Peut contenir que les lettres majuscules et minuscules; minimum 2 et maximim 20 carachtères -->
                                                                                    <input type="text" class="form-control" id="firstName" placeholder="Prénom" value="Arthur" maxlength="20" pattern="[A-Za-zÀ-ÿ ]{2,20}" required>
                                                                                    <small></small>
                                                                                </div>
                                                                                <div class="col-md-6 mb-3">
                                                                                    <label for="lastName">Nom</label>
                                                                                    <input type="text" class="form-control" id="lastName" placeholder="Nom" value="Legrand" maxlength="20" pattern="[A-Za-zÀ-ÿ ]{2,20}" required>
                                                                                    <small></small>
                                                                                </div>
                                                                            </div>
                                                                            <div class="form-row">
                                                                                <div class="col-md-12 mb-3">
                                                                                    <label for="address">Adresse</label>
                                                                                    <!-- Peut contenir que les lettres majuscules, minuscules, chiffres, et virgule; minimum 5 et maximim 80 carachtères -->
                                                                                    <input type="text" class="form-control" id="address" placeholder="Voie, résidence, appartement, complément..." maxlength="80" value="Rue Paoli 2, appartement 11" pattern="[A-Za-z0-9 _,]{5,80}" required>
                                                                                    <small></small>
                                                                                </div>
                                                                            </div>
                                                                            <div class="form-row">
                                                                                <div class="col-md-6 mb-3">
                                                                                    <label for="city">Ville</label>
                                                                                    <!-- Peut contenir que les lettres majuscules, minuscules et tiret; minimum 3 et maximim 40 carachtères -->
                                                                                    <input type="text" class="form-control" id="city" placeholder="Ville" value="Bastia" maxlength="40" pattern="[A-Za-zÀ-ÿ- ]{3,40}" required>
                                                                                    <small></small>
                                                                                </div>
                                                                                <div class="form-group col-md-6">
                                                                                    <label for="email">E-mail</label>
                                                                                    <!-- Le pattern d'e-mail qui doit être une combinaison comme suit dans la balise -->
                                                                                    <input type="email" class="form-control" id="email" placeholder="E-mail" value="adresse@mail.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+[.]{1}[a-z]{2,10}" required>
                                                                                    <small></small>
                                                                                </div>
                                                                            </div>
                                                                            <div class="validation col mt-3">
                                                                                <div class="row total-price mb-2 p-2">
                                                                                    <h2 class="text-uppercase my-0 mr-3">Total</h2>
                                                                                    <p class="text-uppercase my-0 mr-3">tva incluse</p>
                                                                                    <h2 class="article-price font-weight-bold my-0" id="prix-total"></h2>
                                                                                </div>
                                                                                <button type="submit" id="bouton-commander" class="col-9 col-lg-6 col-xl-4 btn btn-primary btn-lg btn-block m-auto" title="Commander">
                                                                                    <span class="font-weight-bold py-2">Commander</span>
                                                                                </button>
                                                                                <medium class="mt-3 font-weight-bold"></medium>
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
    document.querySelector(".article-count").innerHTML += `<h2 class="font-weight-bold nb-articles p-2 text-center"> Nombre d'articles : ${cart.length}</h2>`
};

// Affiche le message de panier vide
function displayEmptyCartMessage() {
    document.querySelector(".contenu-page").innerHTML += `<h2 class="message-panier-vide text-center">Votre panier est vide !</h2>`
};

/*function setEventsListeners() {
   
    window.onload = function(){ // Fonctions exécutés dés le chargement de la page
        // Le bouton de suppression
        const removeArticleButtons = document.getElementsByClassName("btn-remove-article");
        console.log("remove articles buttons ", removeArticleButtons);
        // Boucle pour parcourir les boutons de chaque article
        for(let i=0; i<removeArticleButtons.length; i++){ 
            removeArticleButtons[i].addEventListener("click", function(e) {
                e.preventDefault();
                console.log("id article cliqué", e.target.dataset.idArticle); //enlever ça
                
                // Recupère No Id de caméra
                const cameraId = e.target.dataset.idArticle;
                removeCameraFromCart (cameraId);
            });
        }
    }
};*/

const cart = JSON.parse(localStorage.getItem("cart"));
if (cart != null) {
    console.log("cart", cart);
    displayCartHTML(cart);
    countCartArticles();
    //setEventsListeners();
}
if (cart == null) {
    console.log("cart est vide !");
    displayEmptyCartMessage();
};
// Calcul du prix total du panier
function totalPrice(cart) {
    let totalCart = 0;
    for(let camera of cart) {
        let oneCameraPrice = camera.cameraPrice;
        console.log("Variable de chaque prix: ", oneCameraPrice); // Prix de chaque dans un variable
        // Transforme chaîne de caractères en un nombre pour effectuer le calcul
        totalCart += parseFloat(oneCameraPrice);
    }
    return totalCart;
};

// Le prix total des articles dans le panier
const totalCart = totalPrice(cart);
console.log("Prix total: ", totalCart);
// Affichage de prix total du panier sur la page
document.getElementById("prix-total").innerHTML = (totalCart.toFixed(2).replace(".",",")+" €");
    

//----------------------------- Passer la commande ----------------------------

// Le formulaire

// Les champs du formulaire
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let address = document.getElementById("address");
let city = document.getElementById("city");
let email = document.getElementById("email");

// Ecouter la validation de chaque champ
firstName.addEventListener("change", function() {
    validFirstName(this);
});
lastName.addEventListener("change", function() {
    validLastName(this);
});
address.addEventListener("change", function() {
    validAddress(this);
});
city.addEventListener("change", function() {
    validCity(this);
});
email.addEventListener("change", function() {
    validEmail(this);
});

// Validation de champ de prénom
const validFirstName = function(firstNameInput) {
    let message;
    let valid = false;
    if (firstNameInput.value.length < 2 || firstNameInput.value.length > 20) {
        message = "Le champ doit contenir minimum 2 et maximum 20 caractères";
    }
    else if (!/^[A-Za-z]+$/.test(firstNameInput.value)) {
        message = "Le prénom doit contenir que les lettres";
    }
    else {
        message = "Le prénom est valide";
        valid = true;
    }
    
    let smallText = firstNameInput.nextElementSibling; // Pour afficher les messages de retour
    if (valid) {
        smallText.innerHTML = "Le prènom est valide";
        return true;
    }
    else {
        smallText.innerHTML = message;
        return false;
    }
};
// Validation de champ de nom
const validLastName = function(lastNameInput) {
    let message;
    let valid = false;
    if (lastNameInput.value.length < 2 || lastNameInput.value.length > 20) {
        message = "Le champ doit contenir minimum 2 et maximum 20 caractères";
    }
    else if (!/^[A-Za-z]+$/.test(lastNameInput.value)) {
        message = "Le nom doit contenir que les lettres";
    }
    else {
        message = "Le nom est valide";
        valid = true;
    }
    
    let smallText = lastNameInput.nextElementSibling; // Pour afficher les messages de retour
    if (valid) {
        smallText.innerHTML = "Le nom est valide";
        return true;
    }
    else {
        smallText.innerHTML = message;
        return false;
    }
};
// Validation de champ d'adresse
const validAddress = function(addressInput) {
    let message;
    let valid = false;
    if (addressInput.value.length < 5 || addressInput.value.length > 80) {
        message = "Le champ doit contenir minimum 5 et maximum 80 carachtères";
    }
    else if (!/^[A-Za-z0-9 _,]*[A-Za-z]+[A-Za-z0-9 _]*$/.test(addressInput.value)) {
        message = "L'adresse peut contenir les lettres, les chiffres et virgule";
    }
    else {
        message = "L'adresse est valide";
        valid = true;
    }
    
    let smallText = addressInput.nextElementSibling;
    if (valid) {
        smallText.innerHTML = "L'adresse est valide";
        return true;
    }
    else {
        smallText.innerHTML = message;
        return false;
    }
};
// Validation de champ de ville
const validCity = function(cityInput) {
    let message;
    let valid = false;
    if (cityInput.value.length < 3 || cityInput.value.length > 40) {
        message = "Le champ doit contenir minimum 5 et maximum 80 carachtères";
    }
    else if (!/^[A-Za-z ,-]+$/.test(cityInput.value)) {
        message = "Le nom de ville doit contenir que des lettres";
    }
    
    else {
        message = "Le nom de ville est valide";
        valid = true;
    }
    
    let smallText = cityInput.nextElementSibling;
    if (valid) {
        smallText.innerHTML = "Le nom de ville est valide";
        return true;
    }
    else {
        smallText.innerHTML = message;
        return false;
    }
};
// Validation de champ e-mail
const validEmail = function(emailInput) {
    let emailRegExp = new RegExp(
        "^[a-z0-9._%+-]+@[a-z0-9.-]+[.]{1}[a-z]{2,10}$",
    );
    let testEmail = emailRegExp.test(emailInput.value); 
    let smallText = emailInput.nextElementSibling;

    if (testEmail == true) {
        smallText.innerHTML = "E-mail est valide";
        return true;
    }
    else {
        smallText.innerHTML = "E-mail n'est pas valide";
        return false;
    }
};

function CartProductId() {
    // La commande des articles
    let products = []; // Pour ranger le contenu du panier dans un array pour API
    cart.forEach(produit => {
        console.log("Produit: "+produit.cameraId);
        products.push(produit.cameraId);
    });
    console.log(products);
    return products;
};
const products = CartProductId();

// Pour ranger les données du client dans un objet comme demande l'API
class clientData {
    constructor(firstNameData, lastNameData, addressData, cityData, emailData) {
        this.firstName = firstNameData;
        this.lastName = lastNameData;
        this.address = addressData;
        this.city = cityData;
        this.email = emailData;
    }
};
let clientName = firstName.value;
console.log(clientName);

// L'objet de données du client recuperés de formulaire
let contact = {};
// Récuperation de données
function getFormData() {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let address = document.getElementById('address').value;
    let city = document.getElementById('city').value;
    let email = document.getElementById('email').value;
    contact = new clientData(firstName, lastName, address, city, email);
};

// Pour récuperer la réponse du serveur avec Id de la commande
function getClientOrderId(jsonResponse) {
    let clientOrderId = jsonResponse.orderId;
    console.log(clientOrderId);
    localStorage.setItem("orderConfirmationId", clientOrderId); // Id de la commande savgardé dans Local Storage
}
async function postAPI(dataToPost) {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToPost),
    };
    const response = await fetch("http://localhost:3000/api/cameras/order", options);
    const jsonResponse = await response.json(); // Récuperation de l'Id de la commande
    if (response.ok) {
        console.log("json response :", jsonResponse);
        getClientOrderId(jsonResponse);
        window.location.href = "confirmation.html";
    }
    else {
        console.log("error");
    }
};

// Fonction pour passer la commande et envoyer données du client et liste des articles commandés à l'API
function makeOrder() {
    getFormData();
    dataToPost = {contact, products};
    console.log("Data a envoyer :", dataToPost);
    postAPI(dataToPost);
};

// Stockage du prix total et prénom du client dans Local Storage pour recupérer sur la page de confirmation
function setPriceToLocalStorage(totalCart) {
    localStorage.setItem("totalConfirm", JSON.stringify(totalCart));
};
function setNameToLocalStorage(clientName) {
    localStorage.setItem("firstName", JSON.stringify(clientName));
};
// La validation du formulaire
function confirmForm() {
    let submitButton = document.getElementById("bouton-commander");
    console.log(submitButton);
    submitButton.addEventListener("click", function(g) {
        g.preventDefault(); // Ne prend pas les paramèttres de bouton par défaut
        if (validFirstName(firstName) && validLastName(lastName) && validAddress(address) && validCity(city) && validEmail(email)) {
            makeOrder();
            setPriceToLocalStorage(totalCart);
            setNameToLocalStorage(clientName);
            return true;
        }
        else {
            let mediumText = submitButton.nextElementSibling;
            mediumText.innerHTML = "Veuillez remplir les champs du formulaire";
            return false;
        }
    });
};
confirmForm(); // Appel de la function