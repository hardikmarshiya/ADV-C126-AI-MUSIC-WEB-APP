song  = "";
function preload(){

    song = loadSound("music.mp3");
}
    scorerightwrist = 0;
    scoreLeftWrist = 0;

    rightwristX = 0;
    rightwristY = 0;

    leftwristX  = 0;
    leftwristY = 0;
    


function setup(){

    canvas  = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modeLoaded);
    poseNet.on('pose',gotPoses);
}

function modeLoaded(){

    console.log('pose net is initialized');

}

function gotPoses(results){

    if(results.length >0){

        console.log(results);
        scorerightwrist = results[0].pose.keypoints[10].score;
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        play("music2.mp3");
        console.log("scoreLeftWrist = "+ scoreLeftWrist + "scorerightwrist = "+ scorerightwrist);

        leftwristX = results[0].pose.leftwrist.x;
        leftwristY = results[0].pose.leftwrist.y;

        console.log("leftwristX = " + leftwristX + "leftwristY = " + leftwristY );

        rightwristX = results[0].pose.rightwrist.x;
        rightwristY = results[0].pose.rightwrist.y; 
        stop();
        play("music.mp3");

        console.log("rightwristX = " + rightwristX + "rightwristY = " + rightwristY );
    }

}
function draw(){

    image(video,0,0,600,500);
    fill("#FF0000");
    stroke("#FF0000");

    if(scoreLeftWrist >0.2){

        circle(leftwristX, leftwristY,20);

        InNumberleftwristY = Number(leftwristY);
        remove_decimals = floor(InNumberleftwristY);
    
        volume = remove_decimals/500;
       // leftwristY_divide_1000 = remove_decimals/1000;
        document.getElementById("volume").innerHTML = "Volume = " + volume;
        song.setVolume(volume);
    
    }

   
    //volume = leftwristY_divide_1000 *2;
    //if(scorerightwrist>0.2)
    {
       //circle(rightwristX,rightwristY,20);

        //if(rightwristY>0 && rightwristY<=100){
           // document.getElementById("speed").innerHTML = "speed = 0.5x";
           // song.rate(0.5);

        }

        //else if(rightwristY>100 && rightwristY<=200){

           // document.getElementById("speed").innerHTML = "speed = 1x";
           // song.rate(1);
            
        }

       // else if(rightwristY>200 && rightwristY<=300){

           // document.getElementById("speed").innerHTML = "speed = 1.5x";
           /* song.rate(1.5);
            
        }

        else if(rightwristY>300 && rightwristY<=400){

            document.getElementById("speed").innerHTML = "speed = 2x";
            song.rate(2);
            
        }

        else if(rightwristY>400){

            document.getElementById("speed").innerHTML = "speed = 2.5x";
            song.rate(2.5);
            
        }
    }
}*/
function play(){

    song.play();
    song.setVolume(1);
    song.rate(1);
}
