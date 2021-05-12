  // Les fonctions réutilisables

// Récupération de liste de caméras de l'API
async function getAllCameras() {
    try {
        return fetch("http://localhost:3000/api/cameras")
            .then(data => data.json())
    }
    catch(e) {
        console.log("Error :", e);
    }
};
// Représentation du format d'un article
class Camera{
    constructor(jsonCamera) {
        jsonCamera && Object.assign(this, jsonCamera);
    }
};
// Aside
function displayRecommendations() {
    getAllCameras()
        .then(jsonCameras => {
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
    })
};
// Menu toggle navigation
function displayToggleContent() {
	getAllCameras()
	.then(jsonCameras => {
		for(let jsonCamera of jsonCameras){
			let camera = new Camera(jsonCamera);
			document.querySelector(".nav-marques").innerHTML += `<a href="article.html?id=${camera._id}" class="dropdown-item m-1 m-lg-4 font-weight-bold" title="Caméras Zurss">${camera.name}</a>`;
		}
	})
};