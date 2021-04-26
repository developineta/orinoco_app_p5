
let jsondata = fetch("http://localhost:3000/api/cameras")
	.then( data => data.json())
	.then( jsonCameras => {
		for(let jsonCamera of jsonCameras){
			let camera = new Camera(jsonCamera);
			document.querySelector(".confirmation-message").innerHTML += `<section class="confirmation-message container p-5">
                                                                            <h2 class="font-weight-bold">Merci, ${firstName} pour voter achat !</h2>
                                                                            <p class="font-weight-bold">Voici la confirmation de votre commande :</p>
                                                                            <p class="font-italic">${camera.list} : ${camera.name * camera.quantity}à prix total de ${camera.price} €</p>
                                                                            <p class="font-weight-bold">Votre No de commande est : ${XXXXXXX}</p>
                                                                            <p>Nous avons envoyé un e-mail de confirmation à votre adresse : ${email}</p>
                                                                            <p class="font-weight-bold">À bientôt chez Orinoco !</p>
                                                                        </section>`;
            
        }
    });