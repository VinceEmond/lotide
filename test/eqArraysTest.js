// Imports for test files
// *****************************
// const assertArraysEqual = require("../assertArraysEqual.js");
const assertEqual = require("../assertEqual.js");
// const assertObjectsEqual = require("../assertObjectsEqual.");js
// const countLetters = require("../countLetters.js");
// const countOnly = require("../countOnly.js");
const eqArrays = require("../eqArrays.js");
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



assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);