function appendNumber(num) {
    const display = document.getElementById("display");
    if (display.value.length < 20) {
        display.value += num;
    }
}



function clearDisplay() {
  document.getElementById("display").value = "";
}
function calculate() {
  let expression = document.getElementById("display").value;
  let result = eval(expression);
  document.getElementById("display").value = result;
}
