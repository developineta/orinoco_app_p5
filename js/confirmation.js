// Récuperation de données du local Storage

const totalPrice = JSON.parse(localStorage.getItem("totalConfirm"));
const firstName = JSON.parse(localStorage.getItem("firstName"));
const orderId = localStorage.getItem("orderConfirmationId");

// Le message de confirmation


async function displayConfirmation() {
  try {
    document.querySelector(".confirmation-message").innerHTML += `<h2 class="font-weight-bold">Merci ${firstName} pour voter achat !</h2>
                                                                        <p class="font-weight-bold">Voici la confirmation de votre commande :</p>
                                                                        <p class="font-italic">Vous avez reglé le montant de ${totalPrice.toFixed(2).replace(".", ",")} €</p>
                                                                        <p class="font-weight-bold">Votre No de commande : ${orderId}</p>
                                                                        <p class="font-weight-bold">À bientôt chez Orinoco !</p>`;
  } catch (e) {
    console.log(e);
  }
}
;

if (totalPrice != undefined && firstName != undefined && orderId != undefined) {
  displayConfirmation();
  deleteStorage();
}
else {
  document.querySelector(".confirmation-message").innerHTML += `<h2 class="font-weight-bold">Votre commande est déjà prise en compte</h2>
                                                                        <p class="font-weight-bold">Vous pouvez recommencer vos achats !</p>`;
}

; // Vider le Local Storage

function deleteStorage() {
  setTimeout(function () {
    localStorage.clear();
  }, 2000);
}

; // Aside et menu toggle

displayRecommendations();
displayToggleContent(); 