/**
 * An IIFE (Immediately Invoked Function Expression) is an idiom in which a JavaScript function runs as soon as it is defined.
 *
 */

(function () {
  "use strict";
  function greetMe(myName) {
    alert(`Hello ${myName}`);
  }
  greetMe("Kevin");
})();
