function addition() {
    var numberOne, numberTwo;
    numberOne = document.getElementById('first-number').value;
    numberTwo = document.getElementById('second-number').value;
    result = numberOne + numberTwo;
    document.getElementById('result-number').innerHTML = result;
    console.log(result);
}
