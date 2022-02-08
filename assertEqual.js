const assertEqual = (actual, expected) => {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

//Test cases
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

//Comparing identical strings
assertEqual("string1", "string1");

//Comparing non-identical strings
assertEqual("a string", "a different string");

//Comparing identical numbers
assertEqual(69, 69);

//Comparing non-identical numbers
assertEqual(69, 420);