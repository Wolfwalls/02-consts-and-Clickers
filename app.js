const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");
const counter = document.getElementById("count");

let count=0;
updateCounter();

increaseBtn.onclick = function(){
    count++;
    updateCounter();
}

decreaseBtn.onclick = decreaseCounter;

resetBtn.addEventListener("click", () => {
    count=0;
    updateCounter();
});

function updateCounter(){
    counter.innerText = count;
}

function decreaseCounter(){
    count--;;
    updateCounter();
}