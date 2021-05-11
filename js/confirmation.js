// Aside et menu toggle
displayRecommendations();
displayToggleContent();

// Récuperation de données du local Storage
const totalPrice = JSON.parse(localStorage.getItem("totalConfirm"));
const firstName = JSON.parse(localStorage.getItem("firstName"));
const orderId = localStorage.getItem("orderConfirmationId");
// Le message de confirmation
const displayMessage = document.querySelector(".confirmation-message").innerHTML += `<h2 class="font-weight-bold">Merci ${firstName} pour voter achat !</h2>
                                                                                        <p class="font-weight-bold">Voici la confirmation de votre commande :</p>
                                                                                        <p class="font-italic">Vous avez reglé le montant de ${totalPrice.toFixed(2).replace(".",",")} €</p>
                                                                                        <p class="font-weight-bold">Votre No de commande : ${orderId}</p>
                                                                                        <p class="font-weight-bold">À bientôt chez Orinoco !</p>`;     
// Vider Local Storage
localStorage.clear ("cart", "orderConfirmationId", "firstName", "totalConfirm");

