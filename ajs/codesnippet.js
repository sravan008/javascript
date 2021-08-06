
//Ararys 
const array = [1, 2, 3, 4];
const double = [];
const newArray = array.forEach((num) => {
    double.push(num * 2)
})
console.log("Array --> " + double);

// map, filter and reduce

const mapArray = array.map((num) => { return num * 2 })
//const mapArray = array.map((num) => num * 2 )   //short hand 
console.log("mapArray -->" + mapArray);

const filterArray = array.filter((num) => { return num > 2 })
console.log(filterArray);

const reduceArray = array.reduce((accumlator, num) => { return accumlator + num }, 0);  //0 is nothing but a starting number
console.log(reduceArray);

//////////////////////////////////OBJECTS //////////////////////////////////////////////
//reference type 
//context vs scope
// Context talks about the where the object resides, meaning this varies from the browser execution vs normal js execution 
console.log(this); // exeucte this in both node and browser, both outputs are diff, that is the object context
//Scope - refer notes
//instantiation 
class Player {

    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
}

class Wizard extends Player {

    constructor(name, type) {
        super(name, type)
    }

    play() {
        console.log(`Weee I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard("John", "artist")
const wizard2 = new Wizard("dammy", "dancer")

wizard1.introduce();