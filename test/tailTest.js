// Imports for test files
// *****************************
// const assertArraysEqual = require("../assertArraysEqual.js");
const assertEqual = require("../assertEqual.js");
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
const tail = require("../tail.js");
// const takeUntil = require("../takeUntil.js");
// const without = require("../without.js");


// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!