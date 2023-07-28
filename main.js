
objects = [];
status = "";

function preload(){
  
}


function setup() {
  canvas = createCanvas(480, 380);
  canvas.center();
  video=createCapture(VIDEO);
  video.hide();
}
function start()
{
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
  console.log("Model Loaded!")
  status = true;
}
function draw(){
    image(video,0,0,480,380);
    if(status!=""){
        objectDetector.detect(video,gotresults);
        for(i=0;i<objects.length;i++){
            document.getElementById("status").innerHTML = "Status :object detected";
            document.getElementById("hashtagofobjects").innerHTML="# of objects detected are : "+objects.length;
            fill("red");
            percent=floor(objects[i].confidence*100);
            text(objects[i].label+" "+percent+"%",objects[i].x,objects[i].y);
            noFill();
            stroke("red");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }
}
function gotresults(error,results){
if(error){console.log(error);}
console.log(results);
objects=results;
}






