// getAttribute & setAttribute

let test = document.getElementById('test');

function call(){
    let cls = test.getAttribute("class");
    if(cls=== "red")
    {
      test.setAttribute("class", "blue");
    }
    else if(cls=== "blue")
    {
        test.setAttribute("class", "green");      
    }
    else{
        test.setAttribute("class", "red");

    }
}