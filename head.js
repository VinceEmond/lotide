const assertEqual = (actual, expected) => {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

const head = (array) => {
  return array[0];
};

//Test Cases
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

// An array with only one element should still yield that one element as its head
assertEqual(head(["oneElement"]), "oneElement");

// An empty array should yield undefined as its head
assertEqual(head([]), undefined);
