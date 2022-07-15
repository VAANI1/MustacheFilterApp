function preload(){

}

function setup(){
    canvas = createCanvas(300 , 300);
    canvas.position(110, 250);
    canvas.center();  
    video = createCapture(VIDEO);
    video.hide(); 
}

function draw(){
    image(video, 0, 0, 640, 480);
}

function take_snapshot(){
    save('myMustacheImage.png');    
}


