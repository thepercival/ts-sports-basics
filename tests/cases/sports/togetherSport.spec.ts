import * as chai from 'chai';
import { TogetherSport } from '../../../src';

describe('create TogetherSport', () => {
    it('should return 2', () => {
        const sport = new TogetherSport(2);
        chai.expect(sport.getNrOfGamePlaces()).to.equal(2);
    });
});