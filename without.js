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

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};




const without = function(source, itemsToRemove) {

  let filteredArray = [];

  for (let i = 0; i < source.length; i++) {
    if (!(itemsToRemove.includes(source[i]))) {
      filteredArray.push(source[i]);
    }
  }

  return filteredArray;
};

// Test Cases
assertArraysEqual(without([1,2,3],[1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

// Make sure the original array was not altered by the without function
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);