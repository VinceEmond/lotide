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

const takeUntil = function(array, callback) {

  const result = [];

  for (const elem of array) {
    if (callback(elem)) {
      return result;
    }
    result.push(elem);
  }
  return result;

};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood' ]);