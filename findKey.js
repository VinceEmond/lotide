const assertEqual = (actual, expected) => {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

const findKey = (obj, callback) => {

  // Loop through keys
  for (const key in obj) {
    let value = obj[key];

    //Run callback on object value
    if (callback(value)) {
      return key;
    }
  }

  return undefined;
};



const result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"


const result2 = findKey({
  "Frank": { friends: 12 },
  "John":   { friends: 34 },
  "Chris":      { friends: 25 },
  "Andy":   { friends: 32 },
  "Moon":       { friends: 24 },
  "Jeff":  { friends: 32 }
}, x => x.friends === 32); // => "Andy"

const result3 = findKey({
  "Jupiter": { Moons: 2 },
  "Saturn":   { Moons: 4 },
  "Earth":      { Moons: 25 },
  "Uranus":   { Moons: 42 },
  "Sun":       { Moons: 69 },
  "Mars":  { Moons: 420 }
}, x => x.Moons === 69); // => "Sun"


assertEqual(result, "noma");
assertEqual(result2, "Andy");
assertEqual(result3, "Sun");