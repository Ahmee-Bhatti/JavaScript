
let count = 0;

function item1()
{
    count++;
document.querySelector('#value_quantity').innerText = `Your Bag  has ${count} items`;

}
function item2()
{
    count--;
document.querySelector('#value_quantity').innerText = `Your Bag  has ${count} items`;

}
function item3()
{
    count+=2;
document.querySelector('#value_quantity').innerText = `Your Bag  has ${count} items`;

}



document.querySelector('#value_quantity').innerText = `Your Bag  has ${count} items`;