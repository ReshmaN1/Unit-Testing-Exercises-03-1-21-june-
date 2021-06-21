const whoWon= require('../RPS.js');
const assert = require('assert');

describe("whoWon", function(){

    it("Descriptive feedback...", function(){
      let output = whoWon(2);
      assert.strictEqual(output, "TIE!");
   });

});

