var display = document.getElementById("display");
var botones = document.getElementsByClassName("numero");
var igual = document.getElementById("button12");
var borrar = document.getElementById("clr");
    
    for (var i = 0; i < botones.length; i++ ){
        botones[i].addEventListener("click", function (){
            display.value = display.value + this.value;
        });
    }
    igual.addEventListener("click", function (){
        var total = eval(display.value);
        display.value = total;    
    });
    borrar.addEventListener("click", function (){
        display.value = "";    
        
    });