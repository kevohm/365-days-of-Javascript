/**
 *
 * JavaScript is case-sensitive and uses the Unicode character set. For example, the word Früh (which means "early" in German) could be used as a
 * variable name.
 */

const Früh = "foobar";

/**
 *
 * var- Declares a variable, optionally initializing it to a value.
 * let - Declares a block-scoped, local variable, optionally initializing it to a value.
 * const - Declares a block-scoped, read-only named constant.
 *
 * You use variables as symbolic names for values in your application. The names of variables, called identifiers, conform to certain rules.
 * A JavaScript identifier usually starts with a letter, underscore (_), or dollar sign ($). Subsequent characters can also be digits (0 – 9).
 * Because JavaScript is case sensitive, letters include the characters A through Z (uppercase) as well as a through z (lowercase).
 *
 */

let x;
console.log(x); // logs "undefined"
/**
 * Global scope: The default scope for all code running in script mode.
 * Module scope: The scope for code running in module mode.
 * Function scope: The scope created with a function.
 *
 * In addition, variables declared with let or const can belong to an additional scope:
 *
 * Block scope: The scope created with a pair of curly braces (a block).
 *
 */

if (Math.random() > 0.5) {
  const y = 5;
}
console.log(y); // ReferenceError: y is not defined

if (true) {
  var w = 5;
}
console.log(w); // w is 5  since var are not block-scoped, but only local to the function (or global scope) that the block resides within.
/**
 *
 * var-declared variables are hoisted, meaning you can refer to the variable anywhere in its scope, even if its declaration isn't reached yet.
 *
 * @example
 * var w;
 * console.log(w === undefined); // true
 * w = 3;
 *
 * (function () {
 * var w;
 * console.log(w); // undefined
 * w = "local value";
 * })();
 * similar to the code below
 */

console.log(z === undefined); // true
var z = 3;

(function () {
  console.log(z); // undefined
  var z = "local value";
})();

/**
 *
 * the variable is in a "temporal dead zone" from the start of the block until the declaration is processed.
 * @example
 * console.log(x); // ReferenceError
 * const x = 3;
 *
 * console.log(y); // ReferenceError
 * let y = 3;
 *
 * globalThis variable (which itself is a global variable) may be used to read and set global variables.
 *
 * const only prevents re-assignments, but doesn't prevent mutations.
 */

const MY_OBJECT = { key: "value" };
MY_OBJECT.key = "otherValue";

const MY_ARRAY = ["HTML", "CSS"];
MY_ARRAY.push("JAVASCRIPT");
console.log(MY_ARRAY); // ['HTML', 'CSS', 'JAVASCRIPT'];

/**
 *  1). A primitive (primitive value, primitive data type) is data that is not an object and has no methods or properties.
 * Boolean. true and false.
 * null. A special keyword denoting a null value. (Because JavaScript is case-sensitive, null is not the same as Null, NULL, or any other variant.)
 * undefined. A top-level property whose value is not defined.
 * Number. An integer or floating point number. For example: 42 or 3.14159.
 * BigInt. An integer with arbitrary precision. For example: 9007199254740992n.
 * String. A sequence of characters that represent a text value. For example: "Howdy".
 * Symbol. A data type whose instances are unique and immutable.
 * 2).  Object
 * While functions are technically a kind of object, you can think of objects as named containers for values, and functions as procedures that
 * your script can perform.
 * 
 * JavaScript is a dynamically typed language.
 * 
 * Numbers and the '+' operator
 * 
 * x = "The answer is " + 42; // "The answer is 42"
 * y = 42 + " is the answer"; // "42 is the answer"
 * z = "37" + 7; // "377"
 * 
 * "37" - 7; // 30
 * "37" * 7; // 259
 * 
 * Converting strings to numbers
 * 
 */

parseInt("101", 2); // 5
"1.1" + "1.1"; // '1.11.1'
(+"1.1") + (+"1.1"); // 2.2
// Note: the parentheses are added for clarity, not required.

/**
 * Literals represent values in JavaScript. These are fixed values—not variables—that you literally provide in your script.
 * 
 * Array literals
 * Boolean literals
 * Numeric literals
 * Object literals
 * RegExp literals
 * String literals
 */