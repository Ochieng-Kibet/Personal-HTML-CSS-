var opr = prompt("Operator eg +, -, *, /: ")
var digit1 = parseInt(prompt("First Digit: "))
var digit2 = parseInt(prompt("Second Digit: "))

if (opr == "+"){
    result = digit1 + digit2;
}
else if(opr == "-"){
    result = digit1 - digit2;
}
else if(opr == "*"){
    result = digit1 * digit2;
}
else if(opr == "/"){
    result = digit1 / digit2;
}

window.alert("The result is " + result)