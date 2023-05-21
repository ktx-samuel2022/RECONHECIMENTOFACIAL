//link:https://teachablemachine.withgoogle.com/models/jch89bFf7/
console.log("versão",ml5.version)
document.getElementById("foto").style.display = 'none';
classifier = ml5.imageClassifier("https://storage.googleapis.com/tm-model/qFoSBdC5E/model.json",modelLoaded)

function modelLoaded(){
    console.log("modelo pronto! :D")
}

var camera = document.getElementById("camera")
Webcam.attach(camera)

Webcam.set({
    width:400,height:300,
    image_format:'png',
    png_quality:90
})
function tirarFoto(){
    Webcam.snap(function(uri){
        document.getElementById("foto").innerHTML = "<img src="+uri+">";
        document.getElementById("foto").style.display = 'block';
    })
}