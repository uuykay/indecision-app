console.log("es6-arrow-function-2");

const add = function(a, b) {
  console.log(arguments);
  return a + b;
};
console.log(add(5, 1, 1000));

// const add_af = (a, b) => {
//   // Arguements are not defined in arrow function
//   console.log(arguments);
//   return a + b;
// };
// console.log(add_af(5, 1, 1000));

// ES5 Method binding
// const user = {
//   name: "Will",
//   cities: ["Guangzhou", "Sydney"],
//   printPlacesLived: function() {
//     console.log(this.name);
//     console.log(this.cities);
//     this.cities.forEach(city => {
//       console.log(this.name + " " + "has lived in " + city);
//     });
//   }
// };

// ES6 Method binding
const user = {
  name: "Will",
  cities: ["Guangzhou", "Sydney"],
  printPlacesLived() {
    const cityMessages = this.cities.map(city => `${this.name} has lived in ${city}`);

    return cityMessages;
  }
};

console.log(user.printPlacesLived());

// Challenge area

const multiplier = {
  // numbers - array of numbers
  // multiplyBy - single number
  // multiply - return a new array where the number have been multiplied
  numbers: [1, 2, 3],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map(number => number * this.multiplyBy);
  }
};
console.log(multiplier.multiply());
