function addition(n1: number, n2: number){
    return n1 + n2;
}
// Void Return Type
//  The type void can be used to indicate a function doesn't return any value.
function printResult(num: number): void{
    console.log("Result: ", num);
}

// If I used undefined it should be needed return statement. but both output is same
function printResult1(num: number): undefined{
    console.log("Result: ", num);
    return;
}

printResult(5);
printResult1(100);