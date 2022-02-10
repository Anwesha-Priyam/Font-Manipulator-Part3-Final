console.log("trial uncountable? finally working! yay! :O");

noseX=0;
noseY=0;

rightWrist=0;
leftWrist=0;

difference=0;

function preload()
{}

function setup()
{
    canvas=createCanvas(300,500);
    canvas.position(100,100);

    poseNet=ml5.posenet(VIDEO,modelLoaded);
    posenet,on("pose", gotPoses);
}

function modelLoaded()
{
    console.log("Model Loaded!");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;

        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        
        difference=floor(leftWristX - rightWristX);
    }
}

function draw()
{
    background('#8D1818');

    textsize(difference);
    fill('#ffe8f2');
    text(ANWESHA, 40, 460);
}
