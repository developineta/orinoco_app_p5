
// Récuperation de l'Id de l'url
function getCurrentCameraIdFromURL() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const cameraId = urlParams.get('id');
  return cameraId;
}

// La fonction qui vient d'être déclaré est répresenté dans son résultat - cameraId
const cameraId = getCurrentCameraIdFromURL();
console.log("cameraId from URL: ", cameraId);

// Affichage des donnés d'un article avec la promesse et fetch
function getCameraById(cameraId) {
  return fetch("http://localhost:3000/api/cameras/" + cameraId)
      .then(data => data.json());
}
// Récupere les données de caméra pour les utiliser en local storage
function getCameraOptions(camera) {
    const cameraOptions = {
        cameraName: camera.name,
        cameraPrice: (camera.price/100).toFixed(2).replace(".",","),
        cameraImage: camera.imageUrl,
        cameraId: camera._id
    };
    console.log("Voir Camera Options ", cameraOptions);
    return cameraOptions;
} 

// Fonction de création d'HTML avec les donnés de la caméra correspondante
function displayCameraHTML(camera) {
    document.querySelector(".titre-article").innerHTML = `<h2 class="font-weight-bold text-center titre-camera">Caméra ${camera.name}</h2>`;
    document.querySelector(".carte-camera").innerHTML = `<div class="card-body">
                                                            <picture class="border-bottom">
                                                                <img src="${camera.imageUrl}" class="card-img-top article-image" id="img_article" alt="Caméra vintage" title="Caméra vintage Orinoco" />
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
                                                            <div class="row choise-container pl-3 mt-3">
                                                                <h2 class="card-title font-weight-bold">${camera.name}</h2>
                                                                <h2 class="font-weight-bold" id="camera-prix">${(camera.price/100).toFixed(2).replace(".",",")} €</h2>
                                                            </div>
                                                        </div>`;
        document.querySelector(".article-description").innerHTML = `<h3 class="row font-weight-bold mx-0">Description</h3>
                                                                <p class="row mx-0">${camera.description}</p>`;
}


function setEventsListeners(camera) {
    console.log("camera in event listener setup", camera);
    // Bouton de l'ajout au panier
    const addToCartButton = document.getElementById("addToCart");
    console.log("Add to cart button ", addToCartButton);
    // HTML Element(button add to cart)
    addToCartButton.addEventListener("click", function onAddToCartClick(e) {
        e.preventDefault();
        console.log("Montre bouton à chaque click ", e.target);
    
        // Déclaration de variable où mettre les clés et valeurs qui sont dans local storage
        let articlesInLocalStorage = JSON.parse(localStorage.getItem("cart")); // Pour convertir les données au format JSON
        
        const cameraOptions = getCameraOptions(camera);
        console.log(cameraOptions.cameraImage);
    
        localStorage.setItem("cart", cameraOptions);
    
        // S'il y a déjà les articles dans local storage
        if(articlesInLocalStorage){
            articlesInLocalStorage.push(cameraOptions);
            localStorage.setItem("cart", JSON.stringify(articlesInLocalStorage)); // Pour convertir les données du format JSON au JS
            console.log("Réponse if ", articlesInLocalStorage);
        }
        // S'il n'y a pas des articles dans local storage
        else{
            articlesInLocalStorage = [];
            articlesInLocalStorage.push(cameraOptions);
            localStorage.setItem("cart", JSON.stringify(articlesInLocalStorage));
            console.log("Réponse else ", articlesInLocalStorage);
        }
    });
}
    
// Promesse d'afficher l'article qui correspond à l'id récuperé, le résultat de récupération de l'id (cameraId) utilisé
getCameraById(cameraId)
    .then(camera => {
        console.log("Promise getCameraById: ", camera);
        displayCameraHTML(camera);
        setEventsListeners(camera); 
    });

// Aside - le même fetch avec la promesse que sur la page index
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