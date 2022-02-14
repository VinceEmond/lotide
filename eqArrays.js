// Imports for non-test files
// ***************************
// const assertArraysEqual = require("./assertArraysEqual.js");
// const assertEqual = require("./assertEqual.js");
// const assertObjectsEqual = require("./assertObjectsEqual.");js
// const countLetters = require("./countLetters.js");
// const countOnly = require("./countOnly.js");
// const eqArrays = require("./eqArrays.js");
// const eqObjects = require("./eqObjects.js");
// const findKeyByValue = require("./findKeyByValue.js");
// const findKey = require("./findKey.js");
// const flatten = require("./flatten.js");
// const head = require("./head.js");
// const letterPositions = require("./letterPositions.js");
// const map = require("./map.js");
// const middle = require("./middle.js");
// const tail = require("./tail.js");
// const takeUntil = require("./takeUntil.js");
// const without = require("./without.js");


// Imports for test files
// *****************************
// const assertArraysEqual = require("../assertArraysEqual.js");
// const assertEqual = require("../assertEqual.js");
// const assertObjectsEqual = require("../assertObjectsEqual.");js
// const countLetters = require("../countLetters.js");
// const countOnly = require("../countOnly.js");
// const eqArrays = require("../eqArrays.js");
// const eqObjects = require("../eqObjects.js");
// const findKeyByValue = require("../findKeyByValue.js");
// const findKey = require("../findKey.js");
// const flatten = require("../flatten.js");
// const head = require("../head.js");
// const letterPositions = require("../letterPositions.js");
// const map = require("../map.js");
// const middle = require("../middle.js");
// const tail = require("../tail.js");
// const takeUntil = require("../takeUntil.js");
// const without = require("../without.js");


const eqArrays = function(array1, array2) {

  //Check if parameters are not arrays
  if (!(Array.isArray(array1) || !(Array.isArray(array2)))) {
    return false;
  }

  //Check if arrays lengths are different
  if (array1.length !== array2.length) {
    return false;
  }

  //Check if any items are differen in the array
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  //If no differnces found, return true
  return true;

};



module.exports = eqArrays;