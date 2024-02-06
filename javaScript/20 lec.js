// faluty calculater

let random = Math.random();
console.log(random);
let a = prompt("Enter first Number");
let b = prompt("Enter Second Number");
let c = prompt("Enter Operater");

let obj ={
    "+": "-",
    "-": "*",
    "*": "+",
    "/": "**",
}

if(random>0.1)
{
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}
else{
    c = obj[c];
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}