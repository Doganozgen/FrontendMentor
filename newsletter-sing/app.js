const button = document.getElementById("mail");
const input = document.getElementById("input");
const container = document.querySelector(".container");
const conclusion = document.querySelector(".conclusion");
const paragraf = document.querySelector(".paragraf");
const image = document.querySelector(".image")
console.log(image);

window.addEventListener('resize', function() {
    if (window.innerWidth <= 375) {
    image.src = './images/illustration-sign-up-mobile.svg';
    } else {
      image.src = './images/illustration-sign-up-desktop.svg';
    }
  });



EventListener();
function EventListener(){
    button.addEventListener("submit", getform)
}

function getform(e){
let mail = input.value;
  container.style.display = "none";
  conclusion.style.display = "grid";
  paragraf.innerHTML = `A confirmation email has been sent to <span class="value">${mail}</span>. 
  Please open it and click the button inside to confirm your subscription. `




    e.preventDefault();
}