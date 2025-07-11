import { expect } from 'chai';
import { add } from '../../src/addModule';

describe('helloWorld', () => {
    it('should return "Hello, World!"', () => {
        const result = add(1, 2);
        expect(result).to.equal(3);
    });
});

describe('extended addition test', () => {
    it('should return double', () => {
        const result = add(1, 1);
        expect(result).to.equal(2);
    });
});