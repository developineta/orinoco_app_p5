// Récuperation de données du local Storage
const totalPrice = JSON.parse(localStorage.getItem("totalConfirm"));
console.log(totalPrice);
const firstName = JSON.parse(localStorage.getItem("firstName"));
console.log(firstName);
const orderId = localStorage.getItem("orderConfirmationId");
console.log(orderId);

// Le message de confirmation
const displayMessage = document.querySelector(".confirmation-message").innerHTML += `<h2 class="font-weight-bold">Merci ${firstName} pour voter achat !</h2>
                                                                                        <p class="font-weight-bold">Voici la confirmation de votre commande :</p>
                                                                                        <p class="font-italic">Vous avez reglé le montant de ${totalPrice.toFixed(2).replace(".",",")} €</p>
                                                                                        <p class="font-weight-bold">Votre No de commande : ${orderId}</p>
                                                                                        <p class="font-weight-bold">À bientôt chez Orinoco !</p>`; 
       
// Aside 
displayRecommendations();

// Vider Local Storage
function cleanStorage() {
    localStorage.removeItem("cart");
    localStorage.removeItem("orderConfirmationId");
    localStorage.removeItem("firstName");
    localStorage.removeItem("totalConfirm");
};
cleanStorage();
