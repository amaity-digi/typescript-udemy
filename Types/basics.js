// Number, string, boolean
function add(n1, n2, showResult, phase) {
    var res = n1 + n2;
    if (showResult) {
        console.log(phase + res);
    }
    else {
        return res;
    }
}
var number1 = 100;
var number2 = 50;
var originalResult = true;
var resultPhase = "Result is: ";
add(number1, number2, originalResult, resultPhase);
// The key difference is Javascript uses "dynamic types" (resolved at runtime), Typescript uses "static types" (set during developement)
