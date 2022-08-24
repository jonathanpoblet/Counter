let counter = 0;

const counterInput = document.getElementById("counter");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");

decrease.onclick = () =>{
    counter--;
    counterInput.value = counter;
    inputColor();
}

reset.onclick = () =>{
    counter = 0;
    counterInput.value = counter;
    inputColor();
}

increase.onclick = () =>{
    counter++;
    counterInput.value = counter;
    inputColor();
}

function inputColor(){
    if(counter == 0){
        counterInput.style.color = "black";
    }else if(counter < 0){
        counterInput.style.color = "red";
    }else {
        counterInput.style.color = "green";   
    }
}