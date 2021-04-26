
let jsondata = fetch("http://localhost:3000/api/cameras")
.then( data => data.json())
.then( jsonCameras => {
    for(let jsonCamera of jsonCameras){
        let camera = new Camera(jsonCamera);{
            console.log(camera._id);
        };
    }
});

// Récupere Id de l'url

function getToArticlepage(cameras){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const oneCamera = urlParams.get('_id');
}




 // Caméra qui correspond à l'Id
function getCameraCard(cameras, oneCamera){
    let selectedCamera = cameras.find(cameras => cameras['_id'] == oneCamera);
    console.log(selectedCamera);
}

            
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            const product = urlParams.get('_id');
			
