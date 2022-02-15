# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @vinceemond/lotide`

**Require it:**

`const _ = require('@vinceemond/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1, array2)`: 
  * Asserts comparison of two arrays.
* `assertEqual(actual, expected)`: 
  * Asserts strict equality of two primitive data values.
* `assertObjectsEqual(object1, object2)`:
  * Asserts comparison comparison of two objects.
* `countLetters(string)`: 
  * Counts letters in a string and returns an object containing the count for each letter.
* `countOnly(allItemsAr, itemsToCountObj)`: 
  * Count how many times a key from the itemsToCountObj appears in the array. Note: only the keys with the value false will be counted and returned as an object.
* `eqArrays(array1, array2)`: 
  * A function that can compare two arrays for a perfect match and returns a true/false respectively.
* `eqObjects(object1, object2)`: 
  * A function that can compare two objects for a perfect match and returns a true/false respectively.
* `findKeyByValue(Object, Value)`:
  * Searches an object for a given value an returns the first key found that matches the value. Returned undefined if the value did not match any keys. 
* `findKey(object, callbackFunction)`: 
  * Takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
* `flatten(array)`: 
  * Takes an array that may contain arrays and regroups all the values into a single array. (Does not work for more than 1 level deep)
* `head(array)`: 
  * Returns the first element of an array.
* `letterPositions(string)`:
  * Returns all the indices (zero-based positions) in the string where each character is found.
* `map(array, callbackFunction)`: 
  * Returns a new array based on the results of the callback function.
* `middle(array)`: 
  * Takes-in an array and returns the middle-most element(s) of the given array.
* `tail(array)`: 
  * Returns the tail of the array, meaning every element except the head (first element) of the array.
* `takeUntil(array, callbackFunction)`: 
  * The function will return a slice of the array with elements taken from the beginning. It will keep going until the callback/predicate returns a truthy value.
* `without(array, item)`:
  * Returns a new array with a specific item removed. (Does not alter original array)