# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @harjeetk/lotide`

**Require it:**

`const _ = require('@harjeetk/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual(actual, expected)`: Compare the two values it takes in and print out a message telling us if they match or not.
* `assertArraysEqual(array1, array2)`: Compare two arrays and print out a message telling us if they match or not.
* `assertObjectsEqual(object1, object2)`: The function will take in two objects and print out a message telling us if they match or not.
* `countLetters(string)`: The function takes in a sentence (as a string) and then return a count of each of the letters in that sentence.
* `countOnly(array, object)`: The function will be given an array and an object. It will return an object containing counts of everything that the input object listed.
* `findKey(array, callback)`: The function takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
* `findKeyByValue(object)`: The function takes in an object and a value. It scans the object and return the first key which contains the given value. If no key with that given value is found, then it return undefined.
* `flatten(nestedArray)`: The function takes in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
* `head(array)`: Retrieves the first element from the array.
* `letterPositions(string)`: The function  returns all the indices (zero-based positions) in the string where each character is found.
* `map(array, callback)`: returns a new array based on the results of the callback function.
* `middle(array)`: Returns the middle elements of an array.
* `tail(array)`: Retrieves every element except the head (first element) of the array.
* `takeUntil(array, callback)`: The function  keeps collecting items from a provided array until the callback provided returns a truthy value.
* `without(sourceArray, itemsToRemoveArray)`: The function returns a subset of a given array, removing unwanted elements.