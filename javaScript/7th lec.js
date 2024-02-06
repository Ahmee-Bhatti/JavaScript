// simple Calculate 

/*---> HTML code

<body>
    
   <input type="number" value="first" id="first">
   <select name="ope" id="ope">
    <option value="+">+</option>
    <option value="-">-</option>
    <option value="*">x</option>
    <option value="/">/</option>
    <option value="%">%</option>
   </select>
   <input type="number" value="second" id="second">
   <br/>
   <br/>
   <button onclick="cal()">Calculate</button>
   <input type="text" id="res" readonly>

</body>
*/

function cal()
{
    var opr1 = document.getElementById('first').value;
    var opr2 = document.getElementById('second').value;
    var ope = document.getElementById('ope').value;
    if(ope == '+')
    {
        var result = parseInt (opr1) + parseInt (opr2);
    }
    if(ope == '-')
    {
        var result = parseInt (opr1) - parseInt (opr2);
    }
    if(ope == '*')
    {
        var result = parseInt (opr1) * parseInt (opr2);
    }
    if(ope == '/')
    {
        var result = parseInt (opr1) / parseInt (opr2);
    }
    if(ope == '%')
    {
        var result = parseInt (opr1) % parseInt (opr2);
    }
     document.getElementById('res').value = result;
}