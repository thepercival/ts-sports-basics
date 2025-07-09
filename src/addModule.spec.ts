import { expect } from 'chai';
import { add } from './addModule';

describe('helloWorld', () => {
    it('should return "Hello, World!"', () => {
        const result = add(1, 2);
        expect(result).to.equal(3);
    });
});