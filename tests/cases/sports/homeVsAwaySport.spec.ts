import * as chai from 'chai';
import { HomeVsAwaySport } from '../../../src';

describe('create HomeVsAwaySport', () => {
    it('should return 2', () => {
        const sport = new HomeVsAwaySport();
        chai.expect(sport.getNrOfGamePlaces()).to.equal(2);
    });
});