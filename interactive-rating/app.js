const submit = document.getElementById("button");
const radio = document.querySelectorAll(".number");
const point = document.getElementById("point");
const loyout = document.getElementById('start');
const endLoyout = document.getElementById('end');
eventListener()
function eventListener(){
  submit.addEventListener('click', getFuc);
}


function getFuc(e){
    radio.forEach((e)=>{
        if(e.checked){
          let number = e.dataset.number
          point.innerHTML = `You seledted ${number} out of 5`
          endLoyout.style.display = 'flex'
          loyout.style.display = 'none'
          
        }
        })
       
}
