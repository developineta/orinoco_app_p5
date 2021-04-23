//Création de la promesse

const promiseGetCameras = new Promise(function(resolve, reject) {
    if (typeof cameras !== 'undefined') {
        resolve(cameras);
    }
    else {
        reject('Impossible de trouver le résultat');
    }
});
//Récuperer l'état de la promesse
promiseGetCameras
.then( a => {
    let liste = `<ul>`;
    for (let camera of b) {
        liste += `<li>${camera.name}</li>` ;
    }
    liste += `</ul>` ;
    document.querySelector(`#cameras`).innerHTML = liste;
    console.log(liste);
})
.catch(e => {
    console.log(e);
});