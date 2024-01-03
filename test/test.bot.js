var assert = require('assert');
const testFunction = require('../bot.js');


describe('Bot online test', () => {

  beforeEach(function (done) {
    setTimeout(function(){
      done();
    }, 700);
  });

    it('should return online when bot is online and ready to use', () => {
        assert.equal(typeof testFunction.onlineTest(), "number");
    });
});


describe('user message to log test', () => {
  it ('should log user message to message log as an object', () => {
assert.equal(testFunction.logTest("a + b")[0].content, "You are a general friendly assistant and who is knowledgable about code.");
assert.equal(testFunction.logTest("a + b")[0].role, "system");
assert.equal(testFunction.logTest("a + b")[1].content, "please review the following code: a + b");
assert.equal(testFunction.logTest("a + b")[1].role, "user");
  });
});