// Basic Animation 

/* HTML code

<body>
<div class="black">
  <div id="red"></div>
  <div id="white"></div>
  
</div>
<button onclick="move()">Click</button>
</body>

*/

/* CSS code

 *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

      }
      .black{
        background-color: black;
        height: 400px;
        width: 400px;
        margin: auto;
        position: relative;
        
    }
    #red{
      background-color: red;
      height: 50px;
      width: 50px;
      position: absolute;
      left: 0px;
      top: 0px;
    }
    #white{
      background-color: rgb(211, 214, 4);
      height: 50px;
      width: 50px;
      position: absolute;
      right: 0px;
      top: 0px;
    }
    button{
      margin-left: 32%;
      padding: 8px 30px;
      margin-top: 10px;
      border: none;
      letter-spacing: 0.2rem;
      font-weight: bold;
      border-radius: 20px;
      transition-property: all;
      transition-duration: 0.3s;

    }
    button:hover{
      background-color: red;
      border:none;
      box-shadow: 2px 2px 5px  rgb(2, 2, 2);
      cursor: pointer;
      color: white;
    }
    button:active{
      transform: translateY(4px);
      background-color: rgb(41, 219, 18);
      border:none;
      box-shadow: 2px 2px 5px 2px rgb(47, 223, 3);
      
    }

*/

// JavaScript Code

function move(){

let redel = document.getElementById('red');
let whiteel = document.getElementById('white');
poe = 0;

let anim = setInterval(animate ,5);

function animate(){
    if(poe==350)
    {
        clearInterval(anim);
    }
    else{
        poe++;
       redel.style.top = poe + 'px';
       redel.style.left = poe + 'px';
       whiteel.style.top = poe + 'px';
       whiteel.style.right = poe + 'px';
    }
}
}