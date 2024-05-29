x = 0;
y = 0;
screen_width=0;
screen_height=0;
apple="apple.png";
speak_data="";
to_number="";


draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();
function preload(){
  apple=loadImage("apple.png")
}
function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(content) {
to_number= Number(content);
if(Number.isInteger(to_number)){
  draw_apple="set";
}
else{
  document.getElementById("status").innerHTML = "The speech has been not recognized: " 
};

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() {
 screen_width=window.innerWidth;
 screen_height=window.innerHeight;
 createCanvas(screen_width, screen_width-150);
 canvas.center
}

function draw() {
  console.log("draw")
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
    for(i=1;1<=to_number;i++){
      x= Math.floor(Math.random()*700)
      y= Math.floor(Math.random()*400)
      image(apple,x,y,50,50)
    }
  }
  

 speak();
}

function speak(){
  console.log("speak")
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
