// What is Typescript?
// Typescript is a javascript super set. It is a language building on top of javascript.
// It adds new features and advantages to javascript.
// One disadvantage is typescript can't be execute in brawser.
// It's add a feature to the javascript language which you actually give you a developer an opportunity of identifying errors
// in our code earlier before our script run.
var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
