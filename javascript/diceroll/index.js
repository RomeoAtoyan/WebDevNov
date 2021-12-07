var button = document.getElementById('diceRollerbutton');
var placeholder1 = document.getElementById("placeholder1")
var placeholder1 = document.getElementById("placeholder2")
button.onclick = function (){

    result = Math.random()
    result = Math.round(Math.random()*10)
    
    function getRndInteger(min,max){
        return Math.round(Math.random() * (max - min) ) +min;
    }
    
    var images = [

        '<img src="./assets/dice1.png" alt="" />',
    
        '<img src="./assets/dice2.png" alt="" />',
    
        '<img src="./assets/dice3.png" alt="" />',
    
        '<img src="./assets/dice4.png" alt="" />',
    
        '<img src="./assets/dice5.png" alt="" />',
    
        '<img src="./assets/dice6.png" alt="" />',
    
      ];
    result = getRndInteger(90,100)
    let getRange1 = getRndInteger(0,5)
    let getRange2 = getRndInteger(0,5)
   
    result1 = images[getRange]
    result2 = images[getRange]  

    placeholder1.innerHTML = result1
    placeholder2.innerHTML = result2
}
