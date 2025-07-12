import * as chai from 'chai';
import { OneVsOneSport } from '../../../src';

describe('create OneVsOneSport', () => {
    it('should return 2', () => {
        const sport = new OneVsOneSport();
        chai.expect(sport.getNrOfGamePlaces()).to.equal(2);
    });
});