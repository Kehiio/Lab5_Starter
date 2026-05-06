// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  // Get 
  const speach = window.speechSynthesis;

  /* Get interactives from HTML --- */
  const inputForm = document.querySelector("textarea");
  const faceImg = document.querySelector('img[src="assets/images/smiling.png"]');
  const langSelector = document.getElementById('voice-select');
  const talkButton = document.querySelector("button");
  const textToSpeak = document.getElementById('text-to-speak');

  let voices = [];
  let selectedVoice = "";

  /* Initialize voices --- */
  function populateVoiceList() {
    voices = speach.getVoices();
    
    // clear selector
    langSelector.innerHTML = ""; 

    // load the voices into the selector box
    for (const voice of voices) {
      const option = document.createElement("option");
      option.textContent = `${voice.name} (${voice.lang})`;
      option.value = voice.name;

      if (voice.default) {
        option.textContent += " — DEFAULT";
        selectedVoice = voice;  // voice object
         console.log(`Default: ${selectedVoice.name}`);
      }

      option.setAttribute("data-lang", voice.lang);
      option.setAttribute("data-name", voice.name);
      langSelector.appendChild(option);

    }
  }

  populateVoiceList();
  speechSynthesis.onvoiceschanged = populateVoiceList;


  /* Listener functions --- */

  // Press button and play speech with coresponding voice
  talkButton.addEventListener("click", function(){
    const speakObject = new SpeechSynthesisUtterance(textToSpeak.value)

    speakObject.voice = selectedVoice;
    speechSynthesis.speak(speakObject);

    // change img to speaking
    faceImg.src = `assets/images/smiling-open.png`;
    talkButton.disabled = true;

    // put img back
    speakObject.onend = function() {
      faceImg.src = `assets/images/smiling.png`;
      talkButton.disabled = false;

    }

    
  });

  // change selected voice based on selector option
  langSelector.addEventListener("change", function(event){
    
    selectedVoice = voices.find(
      (voice) =>  voice.name === event.target.value
    );

    

  });

  



  



}