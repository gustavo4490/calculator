let runningTotal = 0;
let buffer = "0";
let previousOperatir;

const screen = document.querySelector('.screen');

function buttonClick(value){
    if(isNaN(value)){
        handleSymbol(value);
        console.log('------------------------');
        console.log('el simbolo es: '+value);
        console.log('------------------------');
    }else{
        handleNumber(value);
        console.log('------------------------');
        console.log('El numero es: '+value);
        console.log('------------------------');
        
    }
    screen.innerText = buffer;
    console.log(`la memoria tiene: ${buffer} ` );    
}

function handleSymbol(symbol){
    // Symbols : ← , − , × , ÷ , +
   
    switch(symbol){
        case 'C':
            buffer= '0';
            runningTotal=0;
            console.log('----Borrando Memoria-----');
            console.log('------------------------');
            break;
        case '=':
            if(previousOperatir == null){
            return
            }
            flushOperation(parseInt(buffer));
            previousOperatir = null;
            buffer = runningTotal;
            runningTotal=0;
            break;
        case '←':
            if(buffer.length === 1){
                buffer= '0';
            }
            else{
                buffer =buffer.toString(0,buffer.length -1);

            }
            break;
        case '+':
                handleMath(symbol);
        break;

        case '−':
            handleMath(symbol);
        break;

        case '×':
            handleMath(symbol);
        break;

        case '÷':
            handleMath(symbol);
        break;

    }

}
function handleMath(symbol){
    
if(buffer === '0'){
    console.log('La memoria esta vacia no se pueden realizar operaciones matematicas');
    return;
}

const intBuffer = parseInt(buffer);

if (runningTotal===0){
    runningTotal = intBuffer;
}else{
    flushOperation(intBuffer);
       
}
previousOperatir = symbol;
buffer = '0';

}

function flushOperation(intBuffer){
    // Symbols : − , × , ÷ , +
    if(previousOperatir === '+'){
        runningTotal += intBuffer;
        console.log('La suma es: '+runningTotal);
    }
    else if(previousOperatir === '−'){
        runningTotal -= intBuffer;
    }
   else if(previousOperatir === '×'){
        runningTotal *= intBuffer;
    }
   else if(previousOperatir === '÷'){
        runningTotal /= intBuffer;
    }

}

function handleNumber(numberString){
    if(buffer === "0"){
        buffer = numberString;
    }else{
        buffer += numberString;
    }
}

function init(){
    console.log('------------------------');
    console.log('iniciando app');
    console.log('------------------------');
    document.querySelector('.calc-buttons').addEventListener('click', function(event){
        buttonClick(event.target.innerText);
    })
 }

init();

