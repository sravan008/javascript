// There are three ways to call a function 

// 1

function test() {
    console.log("This is one way to calling a function");
}
const obj = {
    // name: "John doe",
    address() {
        return 2;
    }
}

test();
obj.address();
test.call();
//There is a another way of calling a function, is :"Function Constructor"  
//*** it works only in browser don't try in node env */
const four = new Function('return 4');
four();

//******************************************/

//***  Function are the fist class citizens in the JS ---> examples below*/

//1
var stuff = function () { }
//2

function a(fn) {
    fn();
}

a(function () { console.log("hi there") })

//3 -- try in chrome only 

function b() {
    return function c() { console.log('bye') }
}

b();

/** Closures */






























