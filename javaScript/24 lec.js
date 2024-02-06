// Event listeners

let x = 0;

document.getElementById('btn').addEventListener("click", counter);
function counter() {
    document.getElementById('count').innerText = x;
    x++;
}

document.getElementById('btn').addEventListener("mouseenter", colorch);

function colorch() {
    document.getElementById('count').style.background = red;
}

function stop(){
    document.getElementById('btn').removeEventListener("click", counter);
}