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

