//Création de la promesse

const promiseGetCameras = new Promise(function(resolve, reject) {
    if (typeof cameras !== 'undefined') {
        resolve(cameras);
    }
    else {
        reject('Impossible de trouver le résultat');
    }
});
