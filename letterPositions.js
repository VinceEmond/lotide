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



// return all the indices (zero-based positions) in the string where each character is found.
// Return the indexes of each position found

const letterPositions = function(sentence) {
  const results = {};

  //const noSpaces = sentence.split(" ").join("");


  // Loop through all letters
  for (let index = 0; index < sentence.length; index++) {
    let letter = sentence[index];
    // Ignore spaces
    if (letter !== " ") {

      //Add to exising key's array of indexes, or create new key and set current letter index to a new array
      results[letter] ? results[letter].push(index) : results[letter] = [index];
            
    }
  }

  return results;
};


assertArraysEqual(letterPositions("lighthouse in the house").l,[0]);
assertArraysEqual(letterPositions("lighthouse in the house").i,[ 1, 11 ]);
assertArraysEqual(letterPositions("lighthouse in the house").g,[ 2 ]);
assertArraysEqual(letterPositions("lighthouse in the house").h,[ 3, 5, 15, 18 ]);
assertArraysEqual(letterPositions("lighthouse in the house").t,[ 4, 14 ]);
assertArraysEqual(letterPositions("lighthouse in the house").o,[ 6, 19 ]);
assertArraysEqual(letterPositions("lighthouse in the house").u,[ 7, 20 ]);
assertArraysEqual(letterPositions("lighthouse in the house").s,[ 8, 21 ]);
assertArraysEqual(letterPositions("lighthouse in the house").e,[ 9, 16, 22 ]);
assertArraysEqual(letterPositions("lighthouse in the house").n,[ 12 ]);
