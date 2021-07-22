// const _ = require("./node_modules/lodash");
// console.log(_.isArray[3,5]);

// *************************** lodash ***************************


var _ = require('lodash');
// var array = [12,13,14,15];
// var evens = _.remove(array,(number)=>{
// return number%2==0;
// });
// console.log(evens);
// console.log(_.isEqual(1,1));
// console.log(_.gte(3,1));

// old way 
[1, 2].forEach((item) => {
    console.log(item)
})

//lodash
_.each([1, 2], (item) => {
    console.log(item)
})

var items = {
    1: {
        name: "Milk"
    },
    2: { name: "Bread" }
}

_.each(items, (item, index) => {
    console.log(item, index);
})


// var newArr = [1,2,3].map(function(item){
//     return item;
// })
// console.log(newArr);

// var users = [{id:101, name:'John'}, {id:201, name:'Jack'} ]
// var newArrLodash = _.map(users,'id');

// console.log(newArrLodash);


var users = [{

    id: 101,
    firstname: 'John',
    isActive: true
},
{
    id: 201,
    fistname: 'Marrie',
    isActive: false
}
]

function normilizeUsers(users) {
    return _.map(users, (user) => {
        return {
            id: user.id,
            firstName: user.firstName,
            isActive: user.sta
        }
    })
}

//Filter

var newArray = _.filter([1, 2, 3, 4, 5, 6], (item) => {
    return item < 4;
})
console.log(newArray);


var products = [
    {
        id: 1,
        name: 'milk',
        price: '1$'
    }, {
        id: 2,
        name: 'Bread',
        price: '2$'
    },
    {
        id: 3,
        name: 'meat',
        price: '3$'
    }
]

function searchProducts(products, searhvalue) {
    return _.filter(products, (product) => {
        // return product.name.includes(searhvalue)
        return _.includes(product.name, searhvalue);
    })
}

console.log(searchProducts(products, 'm'))

//Find

var john = _.find(users, { id: 101 })

console.log(john);

//Remove - Reject

var removeUsers = [

    {
        id: 101,
        name: 'John',
        isActive: true,
        likes: 110
    },
    {
        id: 201,
        name: 'Doie',
        isActive: false,
        likes: 10
    },
    {
        id: 301,
        name: 'Prestige',
        isActive: false,
        likes: 5
    }
]

function getPopulateUsersUsing(removeUsers) {
    return _.reject(users, (user) => {
        return user.isActive && user.likes < 50
    })
}

//************************************************
// if you want to go through every object and check the properyty value
// _.every 
var everyUsers = [{
    id: 101,
    name: 'John',
    isActive: true,
    likes: 110
},
{
    id: 201,
    name: 'Doie',
    isActive: true,
    likes: 10
},
{
    id: 301,
    name: 'Prestige',
    isActive: false,
    likes: 5
}
]
// if the isActive is true in all the above objects then it returns true or false;
var checkEvery = _.every(everyUsers,(user)=>{
    return user.isActive
})
console.log(checkEvery);

var chk = _.some(everyUsers, {isActive:true})
console.log(chk)

/////////// Sorting 

var sortUsers = [{
    id: 101,
    name: 'John',
    isActive: true,
    likes: 110
},
{
    id: 201,
    name: 'Doie',
    isActive: true,
    likes: 10
},
{
    id: 301,
    name: 'Prestige',
    isActive: false,
    likes: 5
}
]

// conventional way of sorting using javascript 
var sorted_users = sortUsers.sort((user1, user2)=>{
    return user1.likes > user2.likes? -1:1
})
console.log(sorted_users)

//lodash way of sorting 

var sort_lodash = _.orderBy(sortUsers,['likes'],['asc'])
console.log(sort_lodash);

// groupBy
// Javascript
// function groupBy(list,prop){
//     return list.reduce(function(aggregator, element){
//         (aggregator[element[prop]] = aggregator[element[prop]] || []).push(element)
//         return aggregator
//     },{})
// }    
//console.log(groupBy(sortUsers, 'isActive'))
console.log(_.groupBy(sortUsers, 'isActive'))  //lodash way 

//chain 
var chainUsers = [{
    id: 101,
    name: 'John',
    isActive: true,
    age: 30
},
{
    id: 201,
    name: 'Doie',
    isActive: true,
    age: 20
},
{
    id: 301,
    name: 'Prestige',
    isActive: true,
    age: 44
}
]

// function getYoungestUserMessage(chainUsers){
//     var activeUsers = _.filter(chainUsers,'isActive')
//     var sortedActiveUsers = _.orderBy(activeUsers,['age'],['asc'])
//     var firstUser = sortedActiveUsers[0];
//     return firstUser.name + ' is ' + firstUser.age +  " youngest"
// }

// console.log(getYoungestUserMessage(chainUsers));
//lodash way 

function getYoungestUsingLodash(chainUsers){
   return _.chain(chainUsers).filter('isActive').orderBy(['age']).map((user)=>{
    return user.name + ' is '+ user.age
})
.head()
.value()
}
console.log(getYoungestUsingLodash(chainUsers));

// Array's

// toUpper, toLower, join and split 

//practice

var temp = "This is super quiz";

console.log(_.chain(temp).split(' ').join("-").value())

console.log(_.camelCase(temp))
console.log(_.snakeCase(temp))


//-- _.uniqueId  --> unique ide generation  
    console.log(_.uniqueId('foo_'))
 // _.random --> random number generation


//Flatten Array 
var numbers = [[1,2],[3,4]]
//JS way -->
console.log([].concat.apply([],numbers))

//lodash
console.log(_.flatten(numbers))

//compact
var arr = [1, 2, null, 3, undefined, 0,false,4, ""]
console.log(arr.filter(Boolean))
console.log(_.compact(arr))

// Assign

