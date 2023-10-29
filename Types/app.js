// object type
var person = {
    name: "aj",
    age: 30,
    hobies: ["playing cricket", "coding", "chilling with friends"],
};
console.log(person.name);
// Array types
var fevActivities;
fevActivities = ["Cricket", "football", "coding"];
console.log("fev", fevActivities);
for (var _i = 0, _a = person.hobies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // Error!! beacuse hobby is not a array , it's a string.
}
//Tuples:
// [1, 2] ==> added by Typescript: Fixed-length array.
// A tuple is a typed array with a pre-defined length and types for each index.
var tuples;
tuples = [20, "pujaa", true];
console.log("tupless", tuples);
// Enums:
var Days;
(function (Days) {
    Days["Sunday"] = "sunday";
    Days["Monday"] = "monday";
    Days["Tuesday"] = "tuesday";
})(Days || (Days = {}));
var years = {
    month: "Jan",
    daysOfYear: Days.Sunday
};
console.log(years.month, "Month", years.daysOfYear);
// any: 
//any data type to temp it expects all types of data-type and doesn’t give any error. 
//It provided such flexibility that it also makes the compiler not generate an error at compile time
var coupon;
coupon = 26;
coupon = 'DEAL26';
coupon = true;
console.log("Any", coupon);
//union type:
// Union types are used when a value can be more than a single type
// Using the | we are saying our parameter is a string or number.
function combine(input1, input2) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combineAges = combine(30, 50);
console.log("combineAge: ", combineAges);
var combineName = combine("Maxmilan", "AJ");
console.log("combineName: ", combineName);
function combine1(input1, input2) {
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        return input1 + input2;
    }
    else {
        return input1.toString() + input2.toString();
    }
}
var result1 = combine1(5, "10");
console.log(result1);
