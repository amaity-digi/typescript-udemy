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

// any: 
//any data type to temp it expects all types of data-type and doesn’t give any error. 
//It provided such flexibility that it also makes the compiler not generate an error at compile time
let coupon: any;

coupon = 26;
coupon = 'DEAL26';
coupon = true;
console.log("Any", coupon);

//union type:
// Union types are used when a value can be more than a single type
// Using the | we are saying our parameter is a string or number.
function combine(input1: number | string, input2: number | string){
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number'){
        result = input1 + input2;
    }else {
        result = input1.toString() + input2.toString()
    }
    return result;
}

const combineAges = combine(30, 50);
console.log("combineAge: ", combineAges);

const combineName = combine("Maxmilan", "AJ");
console.log("combineName: ", combineName);

//Type Aliases:
// Type Aliases allow defining types with a custom name

type combinable = number | string;

function combine1(input1: combinable, input2: combinable): combinable{
  if(typeof input1 === 'number' && typeof input2 === 'number' ){
    return input1 + input2;
  }else{
  return input1.toString() + input2.toString();
}
}
const result1 = combine1(5,"10");
console.log(result1);




