import * as chai from 'chai';
import { NorthSouthVsEastWestSport } from '../../../src';

describe('create TwoVsTwoSport', () => {
    it('should return 4', () => {
        const sport = new NorthSouthVsEastWestSport();
        chai.expect(sport.getNrOfGamePlaces()).to.equal(4);
    });
});