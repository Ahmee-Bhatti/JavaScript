// Exception handling
// try , catch , throw , finally 

function call(){
    try{
        alert("AOA");
    }
    catch(e){
        document.getElementById('res').innerHTML=  e;
    }
}

let num = document.getElementById('num');
function call(){
let data = num.value;
try{
    if(isNaN(data))
    {
        throw "This is not a number";
    }
    else{
        if(data<5 || data>10)
        {
            throw "Number is out of range";
        }
        else{
            throw "";
        }
    }
}
catch(err){
    document.getElementById('res').innerText= err;
    
}
finally{
    num.value="";
}
}