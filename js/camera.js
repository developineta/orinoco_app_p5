//Représentation du format d'un article

class Camera{
    constructor(jsonCamera){
        jsonCamera && Object.assign(this, jsonCamera);
    }
}