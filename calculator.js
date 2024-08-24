const display = document.getElementsByClassName("display");

function append(input) {
    var num = input.getAtribute("operator")
    if (num == "operator") {
        display[0].innerHTML += input.value
    }
    console.log("")
    // display[0].value += input;
    // display.value += input;
}

function clear() {
    display.value = "";
}

function calculete() {
    try{

        display.value = eval(display.value)
    }
    catch{
        display.value = "Error"
    }
}