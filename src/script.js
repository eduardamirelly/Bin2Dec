document.querySelector('button').onclick = function convertBin2Dec(){
    var valueBinary = document.getElementById('bin').value;

    let quantDigitsBinary = valueBinary.length;

    var valueDecimal = 0;
    let aux = quantDigitsBinary;
    for(let cont = 0; cont<quantDigitsBinary; cont++){
        valueDecimal += valueBinary[cont]*Math.pow(2, aux-1);
        aux--;
    }

    document.getElementById('dec').value = valueDecimal;
}

function validationNumber(valueDigit){
    for(let cont = 0; cont<valueDigit.length; cont++){
        if(valueDigit[cont] != 1 && valueDigit[cont] != 0){
            alert('Please! Enter only 0 or 1!'); 
            document.getElementById('bin').value = null;
            break;
        }
    }
}
