"use strict";

console.log("es6-arrow-function-2");

var add = function add(a, b) {
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
var user = {
  name: "Will",
  cities: ["Guangzhou", "Sydney"],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    var cityMessages = this.cities.map(function (city) {
      return _this.name + " has lived in " + city;
    });

    return cityMessages;
  }
};

console.log(user.printPlacesLived());

// Challenge area

var multiplier = {
  // numbers - array of numbers
  // multiplyBy - single number
  // multiply - return a new array where the number have been multiplied
  numbers: [1, 2, 3],
  multiplyBy: 2,
  multiply: function multiply() {
    var _this2 = this;

    return this.numbers.map(function (number) {
      return number * _this2.multiplyBy;
    });
  }
};
console.log(multiplier.multiply());
