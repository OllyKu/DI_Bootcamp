// 🌟 Exercise 1 : Location
// Instructions
// Analyze the code below. What will be the output?
// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }

// const {name, location: {country, city, coordinates: [lat, lng]}} = person;

// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

//I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

// 🌟 Exercise 2: Display Student Info
// Instructions
function displayStudentInfo(objUser){
    //destructuring
    const {first, last} = objUser
    console.log(`Your full name is ${first} ${last}`)
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});


// Using the code above, destructure the parameter inside the function and return a string as the example seen below:
// //output : 'Your full name is Elie Schoppik'


// 🌟 Exercise 3: User & Id
// Instructions
// Using this object 
const users = { user1: 18273, user2: 92833, user3: 90315 }

// Using methods taught in class, turn the users object into an array:
// Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// FYI : The number is their ID number.

const enteries = Object.entries(users);
console.log(enteries);

// Modify the outcome of part 1, by multipling the user’s ID by 2.
// Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
console.log(enteries.map(([a, b])=> [a, b*2]))


//🌟 Exercise 4 : Person Class
// Instructions
// Analyze the code below. What will be the output?
class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member); //object, because class is an object


// 🌟 Exercise 5 : Dog Class
// Instructions
// Using the Dog class below:

class Dog {
  constructor(name) {
    this.name = name;
  }
};
// Analyze the options below. Which constructor will successfully extend the Dog class?
  // 3
  class Labrador extends Dog {
    constructor(size) {
      super(name);
      this.size = size;
    }
  };


//   🌟 Exercise 6 : Challenges
//   Evaluate these (ie True or False)
  
  [2] === [2] // // false - both of them have different memory address so there are not excactlly the same
  // {} === {}  // false - both of them have different memory address so there are not excactlly the same

//   What is, for each object below, the value of the property number and why?

const object1 = { number: 5 }; //5
const object2 = object1; //5 because it's a reference type 
const object3 = object2; //5  because it's a reference type 
const object4 = { number: 5}; //5 it's own number

object1.number = 4;
console.log(object2.number) //4 besause we rewrite object1 value from 5 to 4 and object2 = object1 
console.log(object3.number) //4 besause we rewrite object1 value from 5 to 4 and object3 = object2 = object1 
console.log(object4.number) //5 

// Create a class Animal with the attributes name, type and color. The type is the animal type, for example: dog, cat, dolphin ect …
class Animal{
    constructor(name, type, color){
        this.name = name
        this.type = type
        this.color = color
    }
}
//Create a class Mamal that extends from the Animal class. Inside the class, add a method called sound().
//This method takes a parameter: the sound the animal makes, and returns the details of the animal (name, type and color) as well as the sound it makes.

class Mamal extends Animal{
    constructor(name, type, color){
        super(name, type, color)
    }
    sound(sound){
        return [this.name, this.type, this.color, sound];
    }
}
// Create a farmerCow object that is an instance of the class Mamal. 
// The object accepts a name, a type and a color and calls the sound method that “moos” her information.
// For example: Moooo I'm a cow, named Lily and I'm brown and white

const farmerCow = new Mamal('Lily', 'Cow', 'brown and white')
console.log(farmerCow.sound('Mooooo'))