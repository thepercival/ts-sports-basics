import * as chai from 'chai';
import { TwoVsTwoSport } from '../../../src/sports/twoVsTwoSport';

describe('create TwoVsTwoSport', () => {
    it('should return 4 gameplaces', () => {
        const sport = new TwoVsTwoSport();
        chai.expect(sport.getNrOfGamePlaces()).to.equal(4);
    });
});