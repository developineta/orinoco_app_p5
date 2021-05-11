//L'affichage des données des articles
function displayHomePage() {
	getAllCameras()
	.then(jsonCameras => {
		for(let jsonCamera of jsonCameras) {
			let camera = new Camera(jsonCamera);
			document.querySelector(".article-container").innerHTML += `<div class="card carte-accueil m-2 m-lg-4">
																							<a href="article.html?id=${camera._id}" class="card-body stretched-link" title="Voir article">
																								<picture>
																									<img src="${camera.imageUrl}" class="card-img-top" id="img_zurss" alt="Caméra Zurss" title="Caméra vintage Zurss 50S" />
																								</picture>
																								<h2 class="card-title">${camera.name}</h2>
																								<p>à partir de
																									<span class="font-weight-bold">${(camera.price/100).toFixed(2).replace(".",",")} €</span>
																								</p>
																							</a>
																						</div>`;
		}
	})
};
displayHomePage();
displayToggleContent();