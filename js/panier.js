  // Pour récupérer les valeurs de form
  let firstName = document.getElementById('firstName').value
  let lastName = document.getElementById('lastName').value
  let address = document.getElementById('address').value
  let city = document.getElementById('city').value
  let email = document.getElementById('email').value
  let error = document.getElementsByClassName('error');

// Ne laisse pas soumettre le formulaire si les champs ne sont pas remplies correctement
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch form à qui on applique les styles de validation
    let forms = document.getElementsByClassName('contact-form');
    // Crée le boulce et ne laisse pas soumettre si le form n'est pas vérifié
    let validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('formulaire-valide');
      }, false);
    });
  }, false);
})();



//if (form.checkValidity() === true) {
//  window.location = url;
//};