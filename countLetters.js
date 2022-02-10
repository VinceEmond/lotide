const assertEqual = (actual, expected) => {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};


const countLetters = function(sentence) {

  let resultObj = {};

  // Loop through all letters
  for (const letter of sentence) {

    //If the letter is not a space
    if (letter !== " ") {

      //Add to existing key or create a new one and set to 1
      resultObj.hasOwnProperty(letter) ? resultObj[letter] += 1 : resultObj[letter] = 1;
    }
  }

  // return object with all letters as keys
  return resultObj;
};


assertEqual(countLetters("lighthouse in the house")["l"], 1);
assertEqual(countLetters("lighthouse in the house")["i"], 2);
assertEqual(countLetters("lighthouse in the house")["g"], 1);
assertEqual(countLetters("lighthouse in the house")["h"], 4);
assertEqual(countLetters("lighthouse in the house")["t"], 2);
assertEqual(countLetters("lighthouse in the house")["o"], 2);
assertEqual(countLetters("lighthouse in the house")["u"], 2);
assertEqual(countLetters("lighthouse in the house")["s"], 2);
assertEqual(countLetters("lighthouse in the house")["e"], 3);
assertEqual(countLetters("lighthouse in the house")["n"], 1);


