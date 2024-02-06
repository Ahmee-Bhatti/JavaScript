/*
continue Statement syntax

for (var i = 1; i <=10; i++) {

    if (i%2==0)
    continue;
document.write(i);    
}

Break Statement syntax

for (var i = 1; i <=10; i++) {

    if (i==5)
     break;
document.write(i);    
}

*/

// continue statement
document.write("continue statement" + "<br/>");
for (var a=1; a<=10; a++)
{
    if(a==7){
    continue;
}
    document.write(a + "<br/>");
}

document.write("<hr/>");

// break statement
document.write("break statement" + "<br/>"); 
for (var a=1; a<=10; a++)
{
    if(a==7){
     break;
}
    document.write(a + "<br/>");
}