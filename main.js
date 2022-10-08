// 


var outputScreen=document.getElementById('inputscreen');

function display(num){
    outputScreen.value = outputScreen.value+num;
}

function calculate(){
    try{
        outputScreen.value=eval(outputScreen.value);
    }
    catch(err){
        alert("Invalid");
    }
}

function pressAllClear() {
    outputScreen.value=outputScreen.value.slice(0,-15);
    // outputScreen.innerText='';
  }
function del(){
    outputScreen.value=outputScreen.value.slice(0,-1);
}
