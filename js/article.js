// Récuperation de l'Id de l'url
function getCurrentCameraIdFromURL() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const cameraId = urlParams.get('id');
  return cameraId;
};

// La fonction qui vient d'être déclaré est répresenté dans son résultat - cameraId
const cameraId = getCurrentCameraIdFromURL();
console.log("cameraId from URL: ", cameraId);

// Affichage des donnés d'un article avec la promesse et fetch
function getCameraById(cameraId) {
  return fetch("http://localhost:3000/api/cameras/" + cameraId)
      .then(data => data.json());
};
// Recupere les données de caméra
function getCameraOptions(camera) {
    const cameraOptions = {
        cameraName: camera.name,
        cameraPrice: (camera.price/100).toFixed(2).replace(".",","),
        cameraImage: camera.imageUrl,
        cameraId: camera._id,
    };
    console.log("Voir Camera Options ", cameraOptions);
    return cameraOptions;
};

// Recupere les options de lentille et affiche les choix
function getLenses(camera) {
    let lenseList = camera.lenses;
    console.log("Lenses disponibles :", lenseList);
    for (let i = 0; i < lenseList.length; i++) {
        let lenseOption = lenseList[i];
        console.log("Each lens :", lenseOption); // Montre chaque lentille
        let optionsLenses = document.createElement("option");
        let lenseChoice = document.getElementById("select-lense"); // Recupère le menu de choix
        console.log(lenseChoice);
        lenseChoice.appendChild(optionsLenses); // Création d'éléments enfants pour les choix de lenses
        console.log(optionsLenses);
        optionsLenses.textContent = lenseList[i]; // Affichage de chaque option dans les choix
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
function setEventsListeners(camera) {
    console.log("camera in event listener ", camera);
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
        console.log(cameraOptions);
    
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
};
    
// Promesse d'afficher l'article qui correspond à l'id récuperé
getCameraById(cameraId)
    .then(camera => {
        console.log("Promise getCameraById: ", camera);
        displayCameraHTML(camera);
        setEventsListeners(camera);
        getLenses(camera);
    });

// Aside 
displayRecommendations();