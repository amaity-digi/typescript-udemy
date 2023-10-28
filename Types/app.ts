// object type
const person: {
  name: string;
  age: number;
  hobies: string[];
} = {
  name: "aj",
  age: 30,
  hobies: ["playing cricket", "coding", "chilling with friends"],
};
console.log(person.name);

// Array types
let fevActivities: string[];
fevActivities = ["Cricket", "football", "coding"];
console.log("fev", fevActivities);

for (let hobby of person.hobies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // Error!! beacuse hobby is not a array , it's a string.
}

//Tuples:
// [1, 2] ==> added by Typescript: Fixed-length array.
// A tuple is a typed array with a pre-defined length and types for each index.

let tuples: [number, string, boolean];
tuples = [20, "pujaa", true];
console.log("tupless", tuples);

// Enums:
enum Days {
    Sunday = "sunday",
    Monday = "monday",
    Tuesday = "tuesday",
  }
const years:{
    month: string,
    daysOfYear: Days 
} = {
    month: "Jan",
    daysOfYear: Days.Sunday
}

console.log(years.month,"Month", years.daysOfYear);


