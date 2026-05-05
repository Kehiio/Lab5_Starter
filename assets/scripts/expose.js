// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const linkToExplore = document.querySelector('a[href="explore.html"]');
  console.log(linkToExplore);

  const hornImg = document.querySelector('img[src="assets/images/no-image.png"]');
  console.log(hornImg);

  const selectorList = document.getElementById('horn-select');
  console.log(selectorList);

  const volumeSliderWrapper = document.getElementById('volume-controls');
  console.log(volumeSliderWrapper);

  const volumeSlider = volumeSliderWrapper.querySelector('input[type="range"]');
  const volumeImg = volumeSliderWrapper.querySelector('img[src="assets/icons/volume-level-2.svg"]');

  // list of buttons (size of 1..?)
  const soundButton = document.querySelectorAll('button');
  console.log(soundButton);

  const audioFile = document.getElementsByClassName('hidden')[0];
 


  linkToExplore.addEventListener('click', function() { 
    // take to other page
    console.log("Hyperlink clicked");

  });

  selectorList.addEventListener('change', function(event){
    // play corresponding sound and image
    let s = event.target.value;

    hornImg.src = `assets/images/${s}.svg`;
    audioFile.src = `assets/audio/${s}.mp3`;
    audioFile.load();
    

    console.log(`changed to assets/images/${s}.svg`);



  });

  volumeSlider.addEventListener('input', function(){
    audioFile.volume = (volumeSlider.value / 100);
    
    if (audioFile.volume == 0){
      
      volumeImg.src = 'assets/icons/volume-level-0.svg';
      volumeImg.alt = 'Volume level 0';
    }
    else if (audioFile.volume < 0.33){ // lvl 1 svg
      
      volumeImg.src = 'assets/icons/volume-level-1.svg';
      volumeImg.alt = 'Volume level 1';
    }
    else if (audioFile.volume < 0.67){ // lvl 2
      
      volumeImg.src = 'assets/icons/volume-level-2.svg';
      volumeImg.alt = 'Volume level 2';
    } 
    else{ // lvl 3
      
      volumeImg.src = 'assets/icons/volume-level-3.svg';
      volumeImg.alt = 'Volume level 3';
    }


  });

  // for sound button
  soundButton.forEach(item => {
    item.addEventListener('click', function(event){
      
      audioFile.play();
       console.log(`Clicked on: ${event.target.textContent}`);
    });
  })

  
  


}