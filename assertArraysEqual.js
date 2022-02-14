
const eqArrays = require("./eqArrays.js");


// const eqArrays = function(array1, array2) {

//   //Check if parameters are not arrays
//   if (!(Array.isArray(array1) || !(Array.isArray(array2)))) {
//     return false;
//   }

//   //Check if arrays lengths are different
//   if (array1.length !== array2.length) {
//     return false;
//   }

//   //Check if any items are differen in the array
//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//       return false;
//     }
//   }

//   //If no differnces found, return true
//   return true;

// };

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};


module.exports = assertArraysEqual;