//L'affichage des données des articles

let jsondata = fetch("http://localhost:3000/api/cameras")
	.then( data => data.json())
	.then( jsonCameras => {
		for(let jsonCamera of jsonCameras){
			let camera = new Camera(jsonCamera);
			document.querySelector(".container").innerHTML += `<div class="article-grid mt-4">
																	<div class="article-container row m-auto">
																		<div class="card carte-accueil m-2 m-lg-4">
																			<a href="article.html" class="card-body stretched-link" title="Voir article">
																				<picture>
																					<img src="${camera.imageUrl}" class="card-img-top" id="img_zurss" alt="Caméra Zurss" title="Caméra vintage Zurss 50S" />
																				</picture>
																				<h2 class="card-title">${camera.name}</h2>
																				<p>à partir de
																					<span class="font-weight-bold">${camera.price} €</span>
																				</p>
																			</a>
																		</div>
																	</div>
																</div>`;
		}
	});
