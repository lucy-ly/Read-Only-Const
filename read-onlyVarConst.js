    function printManyTimes(str) {
      "use strict";
      const SENTENCE = str + " is cool!";
      for(let i = 0; i < str.length; i+=2) {
        console.log(SENTENCE);
      }
    }
    printManyTimes("Providence");
    
    
// let is not the only new way to declare variables. In ES6, you can also declare variables using the const keyword.

// const has all the awesome features that let has, with the added bonus that variables declared using const are read-only. They are a constant value, which means that once a variable is assigned with const, it cannot be reassigned.