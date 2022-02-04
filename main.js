video=""
status=""
object=[]
function preload()
{
 video=createVideo("videoplayback.mp4")
 video.hide()

}

function setup()
{
 canvas=createCanvas(400,400)
 canvas.center()

}

function draw()
{
 image(video,0,0,400,400)
 if(status!="")
{
 objectdetector.detect(video,gotResult)
 for(var i=0;i<object.length;i++)
 {
  document.getElementbyId("btn_start").innerHTML="status: Detected"
  document.getElementbyId(btn_no.bject).innerHTML="No. of objects detected are: "+object.length
  fill("goldenrod")
  percent=floor(object[i].confidence*100)
  text(object[i].label + " " + percent + "%",object[i].x +10 ,object[i].y + 10)
  nofill()
  stroke("black")
  rect(object[i].x,object[i].y,object[i].width,objects[i].height)
 }
}
 }

function start()
{
 objectDetector=ml5.objectDetector('COCOSSD',modelLoaded)
 document.getElementbyId("btn_start").innerHTML="status: Detecting "
}

function modelLoaded()
{
 console.log("model is activated")
 status=true
 video.loop()
 video.speed(1)
 video.volume(0)
}

function gotResult(error,result)
{
 if(error)
 {
   console.error(error)
 }
 console.log(result)
 
 object=result
}                                                                                                                                                                                                                          