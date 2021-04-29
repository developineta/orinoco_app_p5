// Les fetch sont rangés dans le même fichier. Le fichier n'est pas lié pour le moment

// Utilisé pour la page index
function getCameras() {
    return fetch("http://localhost:3000/api/cameras")
        .then(data => data.json())
}

// Utilisé pour la page article
function getCameraById(cameraId) {
    return fetch("http://localhost:3000/api/cameras/" + cameraId)
        .then(data => data.json()); // => Promise({ id, price, ... })
}