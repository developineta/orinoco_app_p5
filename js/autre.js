let jsondata = fetch("http://localhost:3000/api/cameras")
	.then( data => data.json())
	.then( jsonCameras => {
		for(let jsonCamera of jsonCameras){
			let camera = new Camera(jsonCamera);{
                console.log(camera._id);
            }
            let queryString = window.location.search;
            let urlParams = new URLSearchParams(queryString);
            let CameraUrlId = urlParams.get('_id');{
                console.log(oneCamera);
            }
        }
    });

// A fonctionné
let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let CameraUrlId = urlParams.get('id');{
    console.log(CameraUrlId);
}
// Correction de mon code à fonctionner
function cameraId() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const CameraUrlId = urlParams.get("id");
    console.log(CameraUrlId);
  }
  
  function getCameraCard() {
    let selectedCamera = cameraId();
    /* la suite de ton programme */
  }

  // pour utiliser fetch en fonction index.js .... ne marche pas correctement
  // Aside
  function getCameras() {
    return fetch("http://localhost:3000/api/cameras")
        .then(data => data.json())
  }

getCameras()
.then(cameras => {
  console.log("Promise getCameras: ", cameras);
  displayCameraHTML(cameras);
});

function displayCameraHTML(camera) {