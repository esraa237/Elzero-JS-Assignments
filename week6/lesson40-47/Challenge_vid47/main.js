/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here
my=my.slice(zero,++counter).reverse();
console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(++zero,--counter)); // ["Elham", "Mazero"]

console.log(`${my[zero][--zero]}${my[++zero][zero]}${my[++zero][--counter]}${my[zero][++counter]}${my[zero][++counter]}${my[zero][++counter]}`); // "Elzero"

console.log(`${my[zero][--counter]}${my[zero][++counter].toUpperCase()}`); // "rO"