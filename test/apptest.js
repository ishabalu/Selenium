const assert = require('chai').assert;
const app=require('../index');
describe('testing if browser opens', () => {
    it('test1', () => {
    //    
    assert.equal(3, 3, '== coerces values to strings');
    });

    it('test2', () => {
        assert.equal(app(), 'hello', '== coerces values to strings');
    });
    
});
//console.log(index());