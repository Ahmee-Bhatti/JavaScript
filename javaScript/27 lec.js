// tabel print


let num = prompt("Please enter a number");
for (let i = 1; i <=10 ; i++)
{
    document.write("<div>");
    document.write(num + " x " + i + " = " + i*num);
    document.write("</div>");
}


// Print diffent patran 

let rows1 = prompt("Enter Rows" ,"" );
patprnt(rows1);

function patprnt(rows1) {
    for (let i = 1; i <=rows; i++)
    {
        for(let j = 1; j <= i; j++)
        {
            document.write("*");
        }
        document.write("</br>");
    }
}

// Reverse patran 

let rows2 = prompt("Enter Rows" ,"" );
patprnt(rows2);

function patprnt(rows2) {
    for (let i = rows; i >=1; i--)
    {
        for(let j = 1; j <= i; j++)
        {
            document.write("*");
        }
        document.write("</br>");
    }
}