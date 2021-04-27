
// Récuperation de l'Id de l'url

function cameraId() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const oneCamera = urlParams.get("id");
      return oneCamera;
  }
  
  
  // Récuperer carte article à partir de son Id :
  // Trouver à quelle caméra de toutes le caméras correspond CameraUrlId
  // CameraCard doit être caméra trouvé par CameraUrlId
 
  function CameraCard(camera, CameraUrlId) {
    if(CameraUrlId == camera._id);
    let selectedCamera = cameras.find(camera => camera._id == cameraUrlId);
    }
  

