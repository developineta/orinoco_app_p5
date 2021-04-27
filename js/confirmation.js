
/*let jsondata = fetch("http://localhost:3000/api/cameras")
	.then( data => data.json())
	.then( jsonCameras => {
		for(let jsonCamera of jsonCameras){
			let camera = new Camera(jsonCamera);
			document.querySelector(".confirmation-message").innerHTML += `<h2 class="font-weight-bold">Merci, ${firstName} pour voter achat !</h2>
                                                                            <p class="font-weight-bold">Voici la confirmation de votre commande :</p>
                                                                            <p class="font-italic">${camera.list} : ${camera.name * camera.quantity}à prix total de ${camera.price} €</p>
                                                                            <p class="font-weight-bold">Votre No de commande est : ${XXXXXXX}</p>
                                                                            <p>Nous avons envoyé un e-mail de confirmation à votre adresse : ${email}</p>
                                                                            <p class="font-weight-bold">À bientôt chez Orinoco !</p>`;
            
        }
    }); */

// Aside
let jsondata = fetch("http://localhost:3000/api/cameras")
    .then( data => data.json())
    .then( jsonCameras => {
      for(let jsonCamera of jsonCameras){
          let camera = new Camera(jsonCamera);
          document.querySelector(".reccomandation-container").innerHTML += `<div class="col-sm-7 col-md-5 col-lg-3 col-xl-2 card reccomandation-card m-2 m-lg-4">
                                                                              <a href="article.html?id=${camera._id}" class="card-body stretched-link" title="Voir article">
                                                                                  <picture>
                                                                                      <img src="${camera.imageUrl}" class="card-img-top" id="img_zurss" alt="Caméra Zurss" title="Caméra vintage Zurss 50S" />
                                                                                  </picture>
                                                                              </a>
                                                                            </div>`
        }
    });
