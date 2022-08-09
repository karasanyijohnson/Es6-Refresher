// CONST & LET
const name ="John"
//  var name = 'John';
//  name ="yeves"
//  console.log(name)
//let can be reassigned and take new value
// let test;

// const person = {
//   name: 'John',
//   age: 33
// };

// const Once used, the variable can’t be reassigned
// person.name = 'Jack';
// console.log(name)
// const nums = [1, 2, 3, 4];
// nums.push(5);
// console.log(nums)

//=================================================
// ARROW FUNCTIONS
// function sayHello() {
//   console.log('Hello');
// }
// sayHello()

// const sayHello=(name)=>{
//   console.log(`Hello ${name}`)
// }
//  const sayHello = name => console.log(`Hello ${name}`);
// sayHello('john')


//==================================================
// const fruits = ['Apples', 'Oranges', 'Grapes'];
// for (i=0;i<fruits.length;i++){
//   let fruit= fruits[i]
//   console.log(fruit)
// }
// FOREACH
// fruits.forEach((fruit, index) => console.log(fruit));
// MAP  
// Works in similar way with the FOREACH except it returns an ARRAY
// const singleFruit = fruits.map(fruit => fruit.slice(0, -1).toUpperCase());
// const singleFruit = fruits.map(fruit => fruit.toUpperCase());
// console.log(singleFruit)

// FILTER
// It is used to return Array with things filtered out. it often used in state management like redux or delete something from API
// const people = [
//   { id: 1, name: 'Karen' },
//   { id: 2, name: 'Bob' },
//   { id: 3, name: 'Sharon' }
// ];

// const people2 = people.filter(person => person.id !== 2);
// console.log(people2)


// ==================================================
// SPREAD
// can mostly used in state management
const arr = [1, 2, 3];
const arr2 = [...arr, 4];
// console.log(arr2)
// // we can use combination of spread operator with Filter
const arr3 = [...arr.filter(num => num !== 2),5];
//console.log(arr3)
// const person1 = {
//   name: 'Johnson',
//   age: 36
// };

// const person2 = {
//   ...person1,
//   email: 'johnson@gmail.com'
// };
//console.log(person2)

//=====================================================
// DESTRUCTURING
// Putting values out of object or array

// const profile = {
//   name: 'John Doe',
//   address: {
//     street: '40 Main st',
//     city: 'Boston'
//   },
//   hobbies: ['movies', 'music']
// };

// // const { name, address, hobbies } = profile;
// // console.log(name,address,hobbies)
// const { street, city } = profile.address;
// console.log(street,city)

//=================================================
// CLASSES
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
};
// const person1= new Person('Jonny',23);
// const person2 = new Person('Sarah', 33);
// console.log(person2, person1)

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   };
//   greet() {
//     return `Hello, my name is ${this.name} and I am ${this.age}`;
//   };

// }

// const person1 = new Person('John', 33);
// const person2 = new Person('Sara', 28);
// console.log(person1.greet())

// //SUBCLASSES;
// class Customer extends Person {
//   constructor(name, age, balance) {
//     super(name, age);
//     this.balance = balance;
//   }

//   info() {
//     return `${this.name} owes $${this.balance}.00`;
//   }
// }

// const customer1 = new Customer('Kevin', 32, 300);
// console.log(customer1.info())

// MODULES

// file 1 (file1.js)
// export const name = 'Jeff';
// export const nums = [1, 2, 3];
// export default Person;

// // // file 2 (file2.js)
// import { name, nums } from './file1';
// import Person from './file1';

