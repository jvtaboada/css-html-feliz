let btnLeft = document.getElementById("btn-left");
let btnRight = document.getElementById("btn-right");
let carousel = document.getElementById("elements-carousel");

let pixels = 100;

btnLeft.addEventListener('click', function leftTranslate(){
    pixels = pixels-100;
    
    carousel.style = `transform: translateX(${pixels}px)`;
});

btnRight.addEventListener('click', function rightTranslate(){
    pixels = pixels+100;
    
    carousel.style = `transform: translateX(${pixels}px)`;
});