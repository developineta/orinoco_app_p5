// Récuperation de l'Id de l'url
function getCurrentCameraIdFromURL() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const cameraId = urlParams.get('id');
  return cameraId;
};
// La fonction qui vient d'être déclaré est répresenté dans son résultat - cameraId
const cameraId = getCurrentCameraIdFromURL();
// Affichage des donnés d'un article avec fetch et la promesse
async function getCameraById(cameraId) {
    try {
        return fetch("http://localhost:3000/api/cameras/" + cameraId)
            .then(data => data.json());
    }
    catch(e) {
        console.log("Error :", e);
    }
};
// Récupre les données de caméra
function getCameraOptions(camera) {
    const cameraOptions = {
        cameraName: camera.name,
        cameraPrice: (camera.price/100).toFixed(2).replace(".",","),
        cameraImage: camera.imageUrl,
        cameraId: camera._id,
    };
    return cameraOptions;
};
// Récupére les options de lentille et affiche les choix
function getLenses(camera) {
    let lenseList = camera.lenses;
    for (let i = 0; i < lenseList.length; i++) {
        let optionsLenses = document.createElement("option");
        let lenseChoice = document.getElementById("select-lense");
        lenseChoice.appendChild(optionsLenses);
        optionsLenses.textContent = lenseList[i];
    }
};
// Fonction de création d'HTML avec les donnés de la caméra correspondante
function displayCameraHTML(camera) {
    document.querySelector(".titre-article").innerHTML = `<h2 class="font-weight-bold text-center titre-camera pl-2">Caméra ${camera.name}</h2>`;
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
                                                                        <select class="custom-select lenses-choise" id="select-lense" title="Choisir la lentille"></select>
                                                                    </div>
                                                                </div>
                                                                <div class="col">
                                                                    <div class="input-group options-quantity mb-3">
                                                                        <div class="input-group-prepend">
                                                                            <label class="input-group-text" for="select-quantity">Quantité :</label>
                                                                        </div>
                                                                        <select class="custom-select quantity-choise" id="select-quantity" title="Choisir la quantité">
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
};
// Function de bouton d'ajout de l'article au panier
function setEventsListeners(camera) {
    const addToCartButton = document.getElementById("addToCart");
    addToCartButton.addEventListener("click", function onAddToCartClick(e) {
        e.preventDefault();
        let articlesInLocalStorage = JSON.parse(localStorage.getItem("cart"));
        const cameraOptions = getCameraOptions(camera);
        localStorage.setItem("cart", cameraOptions);
        // S'il y a déjà les articles dans Local Storage
        if(articlesInLocalStorage){
            articlesInLocalStorage.push(cameraOptions);
            localStorage.setItem("cart", JSON.stringify(articlesInLocalStorage));
        }
        // S'il n'y a pas des articles dans local storage
        else{
            articlesInLocalStorage = [];
            articlesInLocalStorage.push(cameraOptions);
            localStorage.setItem("cart", JSON.stringify(articlesInLocalStorage));
        }
    })
};
// Appel de la fonction et promesse de rétourner les données de l'article qui correspond à l'id
getCameraById(cameraId)
    .then(camera => {
        displayCameraHTML(camera);
        getLenses(camera);
        setEventsListeners(camera);
    });
// Aside 
displayRecommendations();