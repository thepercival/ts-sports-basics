import * as chai from 'chai';
import { PouleStructure } from '../../../src/';

describe('poulestructure', () => {
    it('nrOfPoules should return 2', () => {
        const pouleStructure = new PouleStructure(3,2);
        chai.expect(pouleStructure.getNrOfPoules()).to.equal(2);
    });

    it('nrOfPlaces should return 5', () => {
        const pouleStructure = new PouleStructure(3,2);
        chai.expect(pouleStructure.getNrOfPlaces()).to.equal(5);
    });
        
    it('biggestPoule should be 3', () => {
        const pouleStructure = new PouleStructure(3, 2);
        chai.expect(pouleStructure.getBiggestPoule()).to.equal(3);
    });
});