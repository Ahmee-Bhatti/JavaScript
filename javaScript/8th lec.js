// Get the data using promt functions

/*
HTML Code Example
<body>
    
   Name:<i id="result"></i>
   <br>
   <button onclick="call()">Call</button>

</body>
*/
function call()
{
    var name = prompt("Enter Your Name!","");
     document.getElementById('result').innerHTML = name;
    
}