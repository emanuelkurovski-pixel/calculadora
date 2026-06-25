const display = document.getElementById("display");

function append(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function calculateFunc(func){
    display.value += func;
}

function calculate(){
    try{
        let expression = display.value;

        let open = (expression.match(/\(/g) || []).length;
        let close = (expression.match(/\)/g) || []).length;

        while(close < open){
            expression += ")";
            close++;
        }

        display.value = eval(expression);
    }catch{
        display.value = "Erro";
    }
}