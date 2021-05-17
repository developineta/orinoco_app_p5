// Function de rechargement d'HTML vide
function resetCartHTML() {
  document.querySelector(".cart-article").innerHTML = "";
  document.querySelector(".article-count").innerHTML = "";
  document.querySelector(".contact-validation").innerHTML = "";
  document.querySelector("#btn-supprimer").innerHTML = "";
}

; // Le bouton qui supprime tous les articles de Local Storage

function deleteAllCart() {
  let deleteButton = document.getElementById("btn-supprimer");
  deleteButton.addEventListener("click", function (g) {
    g.preventDefault();
    localStorage.clear();
    resetCartHTML();
    displayEmptyCartMessage();
  });
}

;
deleteAllCart(); 
// Affichage de chaque article dans le panier

function displayCartHTML(cart) {
  for (let camera of cart) {
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
                                                                        <div class="row quantite">
                                                                            <select class="custom-select quantity-choise" id="select-quantity">
                                                                                <option selected>1</option>
                                                                                <option value="1">2</option>
                                                                                <option value="2">3</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                          </div>`;
  }
}

; // Affichage du formulaire s'il y a des articles dans le panier

function displayFormHTML() {
  document.querySelector(".contact-validation").innerHTML += `<div class="formulaire col m-auto">
                                                                  <h3 class="col-11 font-weight-bold mb-4 pl-0">Merci de remplir le formulaire pour passer la commande</h3>
                                                                  <!-- Le formulaire de contact avec options de Bootsrap -->
                                                                  <div class="formulaire-valide"> 
                                                                      <form class="contact-form" id="formulaire" novalidate>
                                                                          <div class="form-row">
                                                                              <div class="col-md-6 mb-3">
                                                                                  <label for="firstName">Prénom</label>
                                                                                  <!-- Peut contenir que les lettres majuscules et minuscules; minimum 2 et maximim 20 carachtères -->
                                                                                  <input type="text" class="form-control" id="firstName" placeholder="Arthur" maxlength="20" pattern="[A-Za-zÀ-ÿ ]{2,20}" required>
                                                                                  <small></small>
                                                                              </div>
                                                                              <div class="col-md-6 mb-3">
                                                                                  <label for="lastName">Nom</label>
                                                                                  <input type="text" class="form-control" id="lastName" placeholder="Legrand" maxlength="20" pattern="[A-Za-zÀ-ÿ ]{2,20}" required>
                                                                                  <small></small>
                                                                              </div>
                                                                          </div>
                                                                          <div class="form-row">
                                                                              <div class="col-md-12 mb-3">
                                                                                  <label for="address">Adresse</label>
                                                                                  <!-- Peut contenir que les lettres majuscules, minuscules, chiffres, et virgule; minimum 5 et maximim 80 carachtères -->
                                                                                  <input type="text" class="form-control" id="address" placeholder="Rue Paoli 2, appartement 11" maxlength="80" pattern="[A-Za-zÀ-ÿ0-9 _,]{5,80}" required>
                                                                                  <small></small>
                                                                              </div>
                                                                          </div>
                                                                          <div class="form-row">
                                                                              <div class="col-md-6 mb-3">
                                                                                  <label for="city">Ville</label>
                                                                                  <!-- Peut contenir que les lettres majuscules, minuscules et tiret; minimum 3 et maximim 40 carachtères -->
                                                                                  <input type="text" class="form-control" id="city" placeholder="Bastia" maxlength="40" pattern="[A-Za-zÀ-ÿ- ]{3,40}" required>
                                                                                  <small></small>
                                                                              </div>
                                                                              <div class="form-group col-md-6">
                                                                                  <label for="email">E-mail</label>
                                                                                  <!-- Le pattern d'e-mail qui doit être une combinaison comme suit dans la balise -->
                                                                                  <input type="email" class="form-control" id="email" placeholder="adresse@mail.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+[.]{1}[a-z]{2,10}" required>
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
}

; // Affichage de bouton de suppresion des articles dans le panier

function displayDeleteButton() {
  document.querySelector("#btn-supprimer").innerHTML += `<button type="button" class="btn bin btn-outline mx-1 btn-remove-article">
                                                              <span class="font-weight-bold">Supprimer les articles</span>
                                                          </button>`;
} 

// Affichage de nombre d'articles dans le panier et appel de fonction d'affichage du formulaire

function countCartArticles() {
  displayFormHTML();
  document.querySelector(".article-count").innerHTML += `<h2 class="font-weight-bold nb-articles p-2 text-center"> Nombre d'articles : ${cart.length}</h2>`;
}

; // Affiche le message de panier vide

function displayEmptyCartMessage() {
  document.querySelector(".contenu-page").innerHTML += `<h2 class="message-panier-vide font-weight-bold text-center m-5">Votre panier est vide !</h2>
                                                        <h3 class=" font-weight-bold text-center mx-0">Recommandations :</h3>`,
  displayRecommendations();
}

; // Récupération des données de Local Storage

const cart = JSON.parse(localStorage.getItem("cart"));

if (cart != null) {
  displayCartHTML(cart);
  countCartArticles();
  displayDeleteButton();
} else if (cart == null) {
  displayEmptyCartMessage();
}

; // Calcul du prix total du panier
// La condition if laisse excécution de functions suivantes que si le panier n'est pas vide
if (cart != null) {
  function totalPrice(cart) {
    try {
        let totalCart = 0;

        for (let camera of cart) {
          let oneCameraPrice = camera.cameraPrice;
          totalCart += parseFloat(oneCameraPrice);
        }

        return totalCart;

    } catch (e) {
        console.log(e);
    }
  }

  ;
  const totalCart = totalPrice(cart);
  // Affichage de prix total du panier sur la page
  function displayTotalCart() {
    try {
      document.getElementById("prix-total").innerHTML = totalCart.toFixed(2).replace(".", ",") + " €";
    } catch (e) {
        console.log(e);
    }
  }
  ; displayTotalCart();

  //----------------------------- Passer la commande ----------------------------
  // Le formulaire
  // Les champs du formulaire

  let firstName = document.getElementById("firstName");
  let lastName = document.getElementById("lastName");
  let address = document.getElementById("address");
  let city = document.getElementById("city");
  let email = document.getElementById("email"); 
  // Ecouter la validation de chaque champ

  firstName.addEventListener("change", function () {
    validFirstName(this);
  });
  lastName.addEventListener("change", function () {
    validLastName(this);
  });
  address.addEventListener("change", function () {
    validAddress(this);
  });
  city.addEventListener("change", function () {
    validCity(this);
  });
  email.addEventListener("change", function () {
    validEmail(this);
  }); 
  // Définition de règles de validation de chaque champ du formulaire

  const validFirstName = function (firstNameInput) {
    let message;
    let valid = false;

    if (firstNameInput.value.length < 2 || firstNameInput.value.length > 20) {
      message = "Le champ doit contenir minimum 2 et maximum 20 carachtères";
    } else if (!/^[A-Za-zÀ-ÿ ]+$/.test(firstNameInput.value)) {
      message = "Le prénom doit contenir que les lettres";
    } else {
      message = "Le prénom est valide";
      valid = true;
    }

    let smallText = firstNameInput.nextElementSibling;

    if (valid) {
      smallText.innerHTML = "Le prènom est valide";
      return true;
    } else {
      smallText.innerHTML = message;
      return false;
    }
  };

  const validLastName = function (lastNameInput) {
    let message;
    let valid = false;

    if (lastNameInput.value.length < 2 || lastNameInput.value.length > 20) {
      message = "Le champ doit contenir minimum 2 et maximum 20 carachtères";
    } else if (!/^[A-Za-zÀ-ÿ ]+$/.test(lastNameInput.value)) {
      message = "Le nom doit contenir que les lettres";
    } else {
      message = "Le nom est valide";
      valid = true;
    }

    let smallText = lastNameInput.nextElementSibling;

    if (valid) {
      smallText.innerHTML = "Le nom est valide";
      return true;
    } else {
      smallText.innerHTML = message;
      return false;
    }
  };

  const validAddress = function (addressInput) {
    let message;
    let valid = false;

    if (addressInput.value.length < 5 || addressInput.value.length > 80) {
      message = "Le champ doit contenir minimum 5 et maximum 80 carachtères";
    } else if (!/^[A-Za-zÀ-ÿ0-9 _,]*[A-Za-zÀ-ÿ ]+[A-Za-zÀ-ÿ0-9 _]*$/.test(addressInput.value)) {
      message = "L'adresse peut contenir les lettres, les chiffres et virgule";
    } else {
      message = "L'adresse est valide";
      valid = true;
    }

    let smallText = addressInput.nextElementSibling;

    if (valid) {
      smallText.innerHTML = "L'adresse est valide";
      return true;
    } else {
      smallText.innerHTML = message;
      return false;
    }
  };

  const validCity = function (cityInput) {
    let message;
    let valid = false;

    if (cityInput.value.length < 3 || cityInput.value.length > 40) {
      message = "Le champ doit contenir minimum 5 et maximum 80 carachtères";
    } else if (!/^[A-Za-zÀ-ÿ ,-]+$/.test(cityInput.value)) {
      message = "Le nom de ville doit contenir que des lettres";
    } else {
      message = "Le nom de ville est valide";
      valid = true;
    }

    let smallText = cityInput.nextElementSibling;

    if (valid) {
      smallText.innerHTML = "Le nom de ville est valide";
      return true;
    } else {
      smallText.innerHTML = message;
      return false;
    }
  };

  const validEmail = function (emailInput) {
    let emailRegExp = new RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+[.]{1}[a-z]{2,10}$");
    let testEmail = emailRegExp.test(emailInput.value);
    let smallText = emailInput.nextElementSibling;

    if (testEmail == true) {
      smallText.innerHTML = "E-mail est valide";
      return true;
    } else {
      smallText.innerHTML = "E-mail n'est pas valide";
      return false;
    }
  }; 



//----------------------------- La commande des articles ----------------------------
// Ranger les id des articles commandés dans un liste pour envoie à l'API


  function cartProductId() {
    let products = [];
    cart.forEach(produit => {
      products.push(produit.cameraId);
    });
    return products;
  };
  const products = cartProductId();

  // Pour ranger les données du client dans un objet comme demande l'API

  class ClientData {
    constructor(firstNameData, lastNameData, addressData, cityData, emailData) {
      this.firstName = firstNameData;
      this.lastName = lastNameData;
      this.address = addressData;
      this.city = cityData;
      this.email = emailData;
    }

  }

  ; // L'objet de données du client recuperés du formulaire

  let contact = {};
  let clientName; 
  // Récuperation de données saisies par le client

  function getFormData() {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let address = document.getElementById('address').value;
    let city = document.getElementById('city').value;
    let email = document.getElementById('email').value;
    contact = new ClientData(firstName, lastName, address, city, email);
    clientName = firstName;
  }

  ; // Récuperer la réponse du serveur avec Id de la commande

  function getClientOrderId(jsonResponse) {
    let clientOrderId = jsonResponse.orderId;
    console.log("L'Id de la commande :", clientOrderId);
    localStorage.setItem("orderConfirmationId", clientOrderId); // Id de la commande savgardé dans Local Storage
  }

  ; // Requête POST

  async function postAPI(dataToPost) {
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(dataToPost)
      };
      const response = await fetch("http://localhost:3000/api/cameras/order", options);
      const jsonResponse = await response.json(); // Récuperation de l'Id de la commande

      if (response.ok) {
        getClientOrderId(jsonResponse);
        window.location.href = "confirmation.html";
      } else {
        console.log("error");
      }
    } catch(e) {
      console.log("La requête POST a échoué ", e);
    }
  }

  ; // Pour passer la commande et envoyer données du client et liste des articles commandés à l'API

  function makeOrder() {
    getFormData();
    let dataToPost = {
      contact,
      products
    };
    postAPI(dataToPost);
  }

  ; // Stockage du prix total et prénom du client dans Local Storage pour recupérer sur la page de confirmation

  function setPriceToLocalStorage(totalCart) {
    localStorage.setItem("totalConfirm", JSON.stringify(totalCart));
  }

  ;

  function setNameToLocalStorage(clientName) {
    localStorage.setItem("firstName", JSON.stringify(clientName));
  }

  ; // La validation du formulaire

  function confirmForm() {
    try {
      let submitButton = document.getElementById("bouton-commander");
      submitButton.addEventListener("click", function (g) {
        g.preventDefault();

        if (validFirstName(firstName) && validLastName(lastName) && validAddress(address) && validCity(city) && validEmail(email)) {
          makeOrder();
          setPriceToLocalStorage(totalCart);
          setNameToLocalStorage(clientName);
          return true;
        } else {
          let mediumText = submitButton.nextElementSibling;
          mediumText.innerHTML = "Veuillez remplir les champs du formulaire";
          return false;
        }
      });
    } catch (e) {
      console.log("La confirmation de formulaire n'est pas possible :", e);
    }
  }

  ;
  confirmForm(); // Appel de la fonction
} else {
  console.log("Le panier est vide");
}