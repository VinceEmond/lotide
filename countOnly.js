const assertEqual = (actual, expected) => {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};



const countOnly = function(allItemsAr, itemsToCountObj) {

  let resultObj = {};

  // Loop through array of items
  for (let item of allItemsAr) {

    // Check if item exists as key and is true
    if (itemsToCountObj[item]) {

      //If key doesn't exist in resultObj, create it. Otherwise add to it.
      resultObj.hasOwnProperty(item) ? resultObj[item] += 1 : resultObj[item] = 1;
 
    }
    
  }

  return resultObj;
};


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);