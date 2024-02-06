// switch statement

var a = prompt("Enter First Value","");
var b = prompt("Enter second Value","");
var op = prompt("Enter Operater","");

switch(op) 
{
    case '+':
     var res = parseInt(a) + parseInt(b); 
     break;
    case '-':
     var res = parseInt(a) - parseInt(b);
     break; 
    case '*':
     var res = parseInt(a) * parseInt(b); 
     break;
    case '/':
     var res = parseInt(a) / parseInt(b); 
     break;
    case '%':
     var res = parseInt(a) % parseInt(b); 
     break;
     default:
        var res = ("Enter valid Operater");
     
    }
    alert(res);