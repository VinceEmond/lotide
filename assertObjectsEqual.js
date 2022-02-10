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


const eqObjects = function(firstObj, secondObj) {

  //Compare amount of keys
  if (Object.keys(firstObj).length !== Object.keys(secondObj).length) {
    return false;
  }

  // Loop through all keys
  for (const key in firstObj) {
    
    let firstObjValue = firstObj[key];
    let secondObjValue = secondObj[key];

    // Check if value is an array
    if (Array.isArray(firstObjValue) && Array.isArray(secondObjValue)) {

      // Compare the arrays
      if (!(eqArrays(firstObjValue, secondObjValue))) {
        return false;
      }

      // Compare non-arrays
    } else {

      // Check if they are the same type
      if (typeof firstObjValue !== typeof secondObjValue) {
        return false;
      }

      // Check if values are the same
      if (firstObjValue !== secondObjValue) {
        return false;
      }
    }

  }

  return true;
};


const assertObjectsEqual = function(obj1, obj2) {

  const inspect = require('util').inspect;

  if (eqObjects(obj1,obj2)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
  }
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

const cd = { c: "1", d: ["2", 3] };
const cd2 = { c: "1", d: ["2", 3, 4] };
const dc = { d: ["2", 3], c: "1" };


assertObjectsEqual(ab,ba);
assertObjectsEqual(cd,ab);
assertObjectsEqual(cd,cd2);
assertObjectsEqual(cd2,cd2);
assertObjectsEqual(cd,ab);
