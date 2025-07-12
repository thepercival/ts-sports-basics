import * as chai from 'chai';
import { TwoVsTwoSport } from '../../../src';

describe('create TwoVsTwoSport', () => {
    it('should return 4', () => {
        const sport = new TwoVsTwoSport();
        chai.expect(sport.getNrOfGamePlaces()).to.equal(4);
    });
});