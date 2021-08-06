
// Old syntax

var z = function a(x, y) {
    return x + y;
}
console.log(z(1, 2));

//ES6 
const x = (a, b) => a + b;
console.log(x(12, 1));

// let and const

const player = "John"; // you can't change the const value
let experienceLevel = "junior";
let yoe = 10;

if (yoe > 5) {
    let experienceLevel = "senior"
    console.log(experienceLevel);
}
console.log(experienceLevel);
// here experince level is block scoped  that is the reason still is printing as a junior
// If you change this var then it is root scope and very dangerous


//Destructuring 
const a = "prince";
const b = "one";
const c = {
    1: "trip"
};

//if you want to keep this in a object in ES6, simply we can assing this
const obj = { a, b, c };

console.log(obj);
// template Strings   `${}`

// ES7

const array = ['dog', 'cat', 'elephant'];
console.log(array.includes('dog'));

//Es8 
// .padStart()
// .padEnd()

//Objects.values
//Objects.entries
// Earlier -- Objects.keys

//Async await

//ES10
// .flat

const array5 = [1, 3, 4[1, 3]];
array5.flat();  // you can also pass the how many levels of flat you required

//flatMap // refer the example

// .trimStart 
// .trimEnd
// formEntries

userProfiles = [['commandor', 23], ["army", 33]]
console.log(Object.fromEntries(userProfiles));  // basically it converts the array type to a Json Object structure

//Try catch


// Refer the Notes for the looping part.... Very interesting one done miss 




