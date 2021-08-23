const assertEqual = require("../assertEqual").assertEqual;
const tail = require("../tail");

//Test Case 1
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

//Test Case 2
const result2 = tail([]);
assertEqual(result2.length, 0);
assertEqual(result2[0], undefined);