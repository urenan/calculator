const display = document.getElementById("display")
var a = false;

function appendToDisplay(input){
    if(a === true){
        clearDisplay();
        a = false
    }
    display.value += input;
}

function clearDisplay(){
    a = false
    display.value = "";
}

function calculate(){
    a = true
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "ERROR";
    }
}