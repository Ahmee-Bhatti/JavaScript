// number validation

document.getElementById('res').style.color = "blue";

function val(x){
    if(isNaN(x.value))
    {
        document.getElementById('res').innerText = "Please enter number only";
        
    }
    else{
        document.getElementById('res').innerText = "";
        if(x.value.lenght > 11){
            document.getElementById('res').innerText = "Please enter 11 digits only";
        }
        else{
            document.getElementById('res').innerText = "";
        }

    }
}