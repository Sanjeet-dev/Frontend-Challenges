function appendToDisplay(value) {
     
    let displayElement = document.getElementById("result");
    displayElement.value += value;
     console.log(displayElement.value);
}

function clearDisplay() {
    let displayElement = document.getElementById("result");
    displayElement.value = '';
}

function calculate() {
    let displayElement = document.getElementById("result");

    try {
        let expression = displayElement.value.replace(/×/g, '*').replace(/÷/g, '/').replace(/−/g, '-');
        displayElement.value = eval(expression);
        console.log(displayElement.value);
    } catch (error) {
        displayElement.value = 'Error';
    }
}
