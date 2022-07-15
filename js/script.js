//CAROUSEL TRANSLATE
const btnLeft = document.getElementById("btn-left");
const btnRight = document.getElementById("btn-right");
const carousel = document.getElementById("elements-carousel");

let pixels = 100;

btnLeft.addEventListener('click', function leftTranslate(){
    pixels = pixels-100;

    carousel.style = `transform: translateX(${pixels}px)`;
});

btnRight.addEventListener('click', function rightTranslate(){
    pixels = pixels+100;
    
    carousel.style = `transform: translateX(${pixels}px)`;
});

//BUTTON ANIMATE
let button = document.querySelector('.submit-button');
let buttonText = document.querySelector('.tick');

const tickMark = "<svg width=\"58\" height=\"45\" viewBox=\"0 0 58 45\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#fff\" fill-rule=\"nonzero\" d=\"M19.11 44.64L.27 25.81l5.66-5.66 13.18 13.18L52.07.38l5.65 5.65\"/></svg>";

buttonText.innerHTML = "Enviar";

button.addEventListener('click', function() {

  if (buttonText.innerHTML !== "Enviar") {
    buttonText.innerHTML = "Enviar";
  } else if (buttonText.innerHTML === "Enviar") {
    buttonText.innerHTML = tickMark;
  }
  this.classList.toggle('submit-button__circle');
});