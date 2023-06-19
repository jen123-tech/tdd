const { expect } = require('chai');
const should = require('chai').should();
const { sum, division } = require('./app');


    describe('Division of numbers', () => {
        it('should get division of numbers', () => {
            expect(division(20, 2)).to.deep.equal(10);
        });
        it('should reject non numbers', () => {
            expect(division('10', 2).to.throw('All parameters must be numbers'));
            // expect(sum('2', 3).to.throw(new Error('All parameters should be numbers')));
        });
        it('should reject blank field', () => {
            expect(division('', '').to.throw('All parameters must not be blank'));
            // expect(sum('2', 3).to.throw(new Error('All parameters should be numbers')));
    });
    });

    describe('sum of numbers', () => {
        it('should get sum of numbers', () => {
                expect(sum(2, 3)).to.deep.equal(5);
        });
        it('should reject non numbers', () => {
                expect(sum('2', 3).to.throw('All parameters must be numbers'));
                // expect(sum('2', 3).to.throw(new Error('All parameters should be numbers')));
        });
        it('should reject blank field', () => {
            expect(sum('', '').to.throw('All parameters must not be blank'));
            // expect(sum('2', 3).to.throw(new Error('All parameters should be numbers')));
    });
    });


//const assert = require('assert');
/*const mocha = require('mocha');
const { add} = require('./app');

describe('Application can perform addition',()=>{
    it('should add numbers',()=>{
        //assert.equal(2 + 5, 7,"Addition wrong");
        chai.expect(add(5, 5)).to.deep.equal(10);
    });
    it('should only add numbers',()=>{
        chai.expect(add('2',10)).to.equal('parameter is not a number');
    });
});*/



/*const { expect } = require('chai');
const should = require('chai').should();
const { sum, division } = require('./app');

/*describe('Mocha basics', () => {
    it('True to be true', () => {
        true.should.be.true;
    });
    it('true to be true', () => {
        expect(true).to.be.true;
    });
    it('expect always to be true', () => {
        alwaysTrue().should.be.true;
    });
});*/


    /*describe('Division of numbers', () => {
        it('should get division of numbers', () => {
            expect(division(20, 2)).to.deep.equal(10);
        });
        it('should reject non numbers', () => {
            expect(division('10', 2).to.throw('All parameters must be numbers'));
            // expect(sum('2', 3).to.throw(new Error('All parameters should be numbers')));
        });
        it('should reject blank field', () => {
            expect(division('', '').to.throw('All parameters must not be blank'));
            // expect(sum('2', 3).to.throw(new Error('All parameters should be numbers')));
    });
    });

    describe('sum of numbers', () => {
        it('should get sum of numbers', () => {
                expect(sum(2, 3)).to.deep.equal(5);
        });
        it('should reject non numbers', () => {
                expect(sum('2', 3).to.throw('All parameters must be numbers'));
                // expect(sum('2', 3).to.throw(new Error('All parameters should be numbers')));
        });
        it('should reject blank field', () => {
            expect(sum('', '').to.throw('All parameters must not be blank'));
            // expect(sum('2', 3).to.throw(new Error('All parameters should be numbers')));
    });
    });*/