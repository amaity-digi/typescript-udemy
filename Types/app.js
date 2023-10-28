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
