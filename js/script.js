function addition() {
    var numberOne = document.getElementById('first-number').value;
    numberOne = +numberOne;
    var numberTwo = document.getElementById('second-number').value;
    numberTwo = +numberTwo;
    result = numberOne + numberTwo;
    document.getElementById('result-number').innerHTML = result;
    console.log(numberTwo);
    console.log(numberOne);
    console.log(result);

}

