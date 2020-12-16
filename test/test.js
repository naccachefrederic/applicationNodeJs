const assert = require('assert');

function addition(a, b) {
    return (a + b);
}

describe('Simple Math Test', () => {
    it('should return 2', () => {
        assert.strictEqual(addition(1,1), 2);
    });
    it('should return 6', () => {
        assert.strictEqual(addition(3,3), 6);
    });
});