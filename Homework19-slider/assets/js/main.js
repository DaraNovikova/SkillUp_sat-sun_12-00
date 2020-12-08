/* eslint-disable no-unused-vars */
/* eslint-disable func-style */
/* eslint-disable require-jsdoc */


let prevIndicator = null;

function createContainer() {
  elem = document.createElement('div');

  elem.setAttribute('id', 'carousel');
  elem.setAttribute('class', 'carousel');
  document.querySelector('body').appendChild(elem);

  container = document.querySelector('#carousel');
}

function createSlides (n){

    const slides = document.createElement('ul');
    slides.setAttribute('class', 'slides');
    

    for (let i = 0; i < n; i++) {
        const slide = document.createElement('li');
        slide.setAttribute('class', 'slides__item');
        const link = document.createElement('a');
        link.setAttribute('href', '#');
        slide.appendChild(link);

        if (i === 0) {
            slide.classList.add('active');
        }

        slides.appendChild(slide);   
    }
    
    container.appendChild(slides);
}

function createIndicators (n){
    const indicators = document.createElement('div');
    indicators.setAttribute('class', 'indicators');

    for (let i = 0; i < n; i++) {
        const indicator = document.createElement('span');
        indicator.setAttribute('class', 'indicators__item');

        if (i === 0) {
            indicator.classList.add('active');
        }

        indicator.dataset.slideTo = `${i}`;
        indicators.appendChild(indicator);
    }

    container.appendChild(indicators);
}


function createControls() {
    controlsContainer = document.createElement('div');
    controlsContainer.setAttribute('class', 'controls');
  
    for (i = 0; i < 3; i++) {
      let controls = document.createElement('div');
      let icon = document.createElement('i');
  
      switch (i) {
        case 0:
          controls.setAttribute('class', `controls__item controls__prev`);
          icon.setAttribute('class', `fas fa-chevron-left`);
          break;
        case 1:
          controls.setAttribute('class', `controls__item controls__next`);
          icon.setAttribute('class', `fas fa-chevron-right`);
          break;
        case 2:
          controls.setAttribute('class', `controls__item controls__pause`);
          icon.setAttribute('class', `fas fa-play`);
          break;
      }
      
      controls.appendChild(icon);
      controlsContainer.appendChild(controls);
    }
    container.appendChild(controlsContainer);
  }


function createStyle (){
    const style = document.createElement('style');
    let styleCode = `
        .controls,
        .slides {
        position: relative;
        }
        .indicators {
        display: flex;
        }
        .indicators__item {
        display: block;
        width: 20px;
        height: 20px;
        background-color: gray;
        margin: 5px;
        border-radius: 10px;
        }`;

    style.innerHTML = styleCode;
    container.appendChild(style);
}


function indicate (e) {
    
    let target = e.target;
  
    if (target.classList.contains('indicators__item')) {
      target.style.backgroundColor = 'red';
  
      if (prevIndicator !== null) prevIndicator.removeAttribute('style');
  
      prevIndicator = target;
    }
  }


function setListener() {
    let indicatorsContainer = document.querySelector('div.indicators');
    indicatorsContainer.addEventListener('click', indicate);
  }




function createCarousel(slidesCount = 5) {
    // container = document.querySelector('#carousel');
    createContainer();
    createSlides(slidesCount);
    createIndicators(slidesCount);
    createControls();
    createStyle();
    setListener()

};

  
createCarousel();