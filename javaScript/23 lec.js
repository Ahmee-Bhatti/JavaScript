// Business name Generator

let ran = Math.random();
let first, second, third;

// First for name
if(ran<0.35)
{
    first = "Ahmee";
}
else if(ran<0.65 && ran>=0.35) {
    first = "Zeeshan";
}
else{
    first = "Rizwan";
}

// Second For business
ran = Math.random();
if(ran<0.35)
{
    second = "Business Man";
}
else if(ran<0.65 && ran>=0.35) {
    second = "Teacher";
}
else{
    second = "Web Developer";
}

// third for country
ran = Math.random();
if(ran<0.35)
{
    third = "in Uk";
}
else if(ran<0.65 && ran>=0.35) {
    third = "in AUS";
}
else{
    third = "in USA";
}

document.write(`${first} ${second} ${third}`);