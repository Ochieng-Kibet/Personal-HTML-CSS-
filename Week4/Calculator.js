var opr = prompt("Operator: ")
var digit1 = parseInt(prompt("First Digit: "))
var digit2 = parseInt(prompt("Second Digit: "))

if (opr == "+")
{
    console.log(digit1 + digit2)
}else if(opr == "-")
{
    console.log(digit1 - digit2)
}else if(opr == "*")
{
    console.log(digit1 * digit2)
}else if(opr == "/")
{
    console.log(digit1 / digit2)
}