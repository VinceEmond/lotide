const assertEqual = (actual, expected) => {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

const findKeyByValue = function(obj, searchedValue) {

  // Loop through each key of the object
  for (const key in obj) {

    //if key's value = value, return key
    if (obj[key] === searchedValue) {
      return key;
    }

  }
  
  return undefined;
};


const bestTVShowsByGenre = {
  "sci_fi": "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);