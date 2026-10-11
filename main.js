
const dipslay = document.getElementById("display")


function appendToDisplay(input){
    dipslay.value += input
}
function clearDisplay(){
    dipslay.value = ""
}
function calculate(){

    try{
        dipslay.value = eval(dipslay.value)
    }
    catch(error){
        dipslay.value = 'Error'
    };
    
}