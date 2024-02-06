// window print 


function printdata()
{
let body = document.getElementById("body").innerHTML;
let data = document.getElementById('data').innerHTML;
document.getElementById('body').innerHTML = data;
window.print();
 document.getElementById('body').innerHTML =body;
}