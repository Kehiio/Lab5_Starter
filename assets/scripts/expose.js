// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  /* Get interative items from html file ---- */
  const linkToExplore = document.querySelector('a[href="explore.html"]');
  const hornImg = document.querySelector('img[src="assets/images/no-image.png"]');
  const selectorList = document.getElementById('horn-select');
  const volumeSliderWrapper = document.getElementById('volume-controls');
  const volumeSlider = volumeSliderWrapper.querySelector('input[type="range"]');
  const volumeImg = volumeSliderWrapper.querySelector('img[src="assets/icons/volume-level-2.svg"]');
  // list of buttons (size of 1..?)
  const soundButton = document.querySelectorAll('button');
  const audioFile = document.getElementsByClassName('hidden')[0];
 

  /* Listener functions --- */

  // changes img and sound based on selected horn from dropdown
  selectorList.addEventListener('change', function(event){
    
    let s = event.target.value;
    hornImg.src = `assets/images/${s}.svg`;
    audioFile.src = `assets/audio/${s}.mp3`;

    audioFile.load();
  });

  // Changes volume level picture and alt text based on slider value 
  volumeSlider.addEventListener('input', function(){
    audioFile.volume = (volumeSlider.value / 100);
    
    if (audioFile.volume == 0){// lvl 0, mute, 0
      
      volumeImg.src = 'assets/icons/volume-level-0.svg';
      volumeImg.alt = 'Volume level 0';
    }
    else if (audioFile.volume < 0.33){ // lvl 1 < 33
      
      volumeImg.src = 'assets/icons/volume-level-1.svg';
      volumeImg.alt = 'Volume level 1';
    }
    else if (audioFile.volume < 0.67){ // lvl 2 < 67
      
      volumeImg.src = 'assets/icons/volume-level-2.svg';
      volumeImg.alt = 'Volume level 2';
    } 
    else{ // lvl 3, >= 67
      
      volumeImg.src = 'assets/icons/volume-level-3.svg';
      volumeImg.alt = 'Volume level 3';
    }


  });

  // Play horn on click, check for party horn
  soundButton.forEach(item => {
    item.addEventListener('click', function(event){
      
      audioFile.play();
      
      if (selectorList.value == 'party-horn'){
        jsConfetti.addConfetti();
      }

    });
  })


  /* Initialization stuff --- */

  // set initial audio loudness to match initial state of slider
  audioFile.volume = 0.5;

  // create confetti object
  const jsConfetti = new JSConfetti();
    


}