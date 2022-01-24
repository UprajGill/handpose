prediction1="";
prediction2="";

Webcam.set({
width:350,
height:350,
image_format:'png',
png_quality:97
});
camera=document.getElementById("camera");
Webcam.attach('#camera');

function snapshot(){
Webcam.snap(function(data_uri){document.getElementById('result').innerHTML='<img id="capture_img" src="'+data_uri+'"/>'});

}
console.log('ml5version',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/036cWvzDu/model.json',modelLoaded);
function modelLoaded(){
console.log('modelLoaded');
}
function speak(){
var synth=window.speechSynthesis;
speak_data_1="The First Hand Pose Is"+prediction1;
speak_data_2="And The Second Hand Pose Is"+prediction2;
var utterThis=new SpeechSynthesisUtterance(speakdata1+speakdata2);
synth.speak(utterThis);
}