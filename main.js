
  
var recognition = new SpeechRecognition();



function add(){
    var result=Number(document.getElementById("Firstno").value)+Number(document.getElementById("Secondno").value);
    window.alert(result);
  }

  function start()
{
    Textbox.innerHTML = ""; 
    recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

var Content = event.results[0][0].transcript;

    Textbox.innerHTML = Content;
    console.log(Content);
      if(Content =="take my selfie")
      {
        console.log("taking selfie --- ");
        speak();
      }
}



  function speak(){
    var synth = window.speechSynthesis;

    speak_data = add();

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

   

    setTimeout(function()
    { 
        
    } , 3000);
}