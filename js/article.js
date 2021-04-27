
// Récuperation de l'Id de l'url
function getCurrentCameraIdFromURL() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const cameraId = urlParams.get('id');
  return cameraId;
}

// La fonction qui vient d'être déclaré est répresenté en cameraId
const cameraId = getCurrentCameraIdFromURL();
console.log("cameraId from URL: ", cameraId);

// Affichage des donnés d'un article - fetch
function getCameraById(cameraId) {
  return fetch("http://localhost:3000/api/cameras/" + cameraId) // Promise JSON
      .then(data => data.json()); // Les data d'une caméra
}

// Promesse d'afficher l'article qui correspond à l'id récuperé
getCameraById(cameraId)
    .then(camera => {
        console.log("Promise getCameraById: ", camera);
        displayCameraHTML(camera);
    });

// Création d'HTML avec les donnés de la caméra correspondante
function displayCameraHTML(camera) {
  document.querySelector(".titre-article").innerHTML += `<h2 class="font-weight-bold">caméra ${camera.name}</h2>`
  document.querySelector(".article-container").innerHTML += `<div class="card m-2 m-lg-4">
                                                              <div class="card-body">
                                                                  <picture class="border-bottom">
                                                                      <img src="${camera.imageUrl}" class="card-img-top" id="img_article" alt="Caméra vintage" title="Caméra vintage Orinoco" />
                                                                  </picture>
                                                                  <div class="row option-container mt-3">
                                                                      <div class="col">
                                                                          <!-- Le choix  de lentille avec options Bootstrap -->
                                                                          <div class="input-group options-lenses mb-3">
                                                                              <div class="input-group-prepend">
                                                                                  <label class="input-group-text" for="select-lense">Lentille :</label>
                                                                              </div>
                                                                              <select class="custom-select lenses-choise" id="select-lense">
                                                                                  <option selected>${camera.lenses [0]}</option>
                                                                                  <option value="1">${camera.lenses [1]}</option>
                                                                                  <option value="2">${camera.lenses [2]}</option>
                                                                              </select>
                                                                          </div>
                                                                      </div>
                                                                      <div class="col">
                                                                          <div class="input-group options-quantity mb-3">
                                                                              <div class="input-group-prepend">
                                                                                  <label class="input-group-text" for="select-quantity">Quantité :</label>
                                                                              </div>
                                                                              <select class="custom-select quantity-choise" id="select-quantity">
                                                                                  <option selected>1</option>
                                                                                  <option value="1">2</option>
                                                                                  <option value="2">3</option>
                                                                              </select>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                                  <div class="row choise-container pl-3">
                                                                      <h2 class="card-title font-weight-bold">${camera.name}</h2>
                                                                  </div>
                                                                  <!-- Le prix de caméra multiplié par quantité choisie -->
                                                                  <h2 class="article-price font-weight-bold">${(camera.price/100).toFixed(2).replace(".",",")} €</h2>
                                                                  <!-- Bouton primaire et large de Bootstrap -->
                                                                  <div class="row button-container pl-3 mt-5">
                                                                      <button type="button" class="col-9 col-lg-6 col-xl-4 btn btn-primary btn-lg btn-block" title="Ajouter au panier">
                                                                          <span class="font-weight-bold">Ajouter au panier</span>
                                                                      </button>
                                                                      <div class="col-3 heart-button text-center">
                                                                          <button type="button" onClick="location.href='panier.html'" class="btn btn-outline-primary" title="Ajouter aux favoris">
                                                                              <span>
                                                                                  <i class="fas fa-heart"></i>
                                                                              </span>
                                                                          </button>
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                              </div>
                                                              <div class="col article-description">
                                                                  <h3 class="row font-weight-bold mx-0">Description</h3>
                                                                  <p class="row mx-0">${camera.description}</p>
                                                              </div>
                                                              <div class="col">`
  };
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
