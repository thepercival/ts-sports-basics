import * as chai from 'chai';
import { TogetherSport } from '../../../src/sports/togetherSport';

describe('create without zero gamePlaces', () => {
    it('should return togethersport with zero gameplaces', () => {
        const result = new TogetherSport(undefined);
        chai.expect(result.nrOfGamePlaces).to.equal(undefined);
    });
});

describe('create without 1 gamePlace', () => {
    it('should return togethersport with one gameplace', () => {
        const result = new TogetherSport(1);
        chai.expect(result.nrOfGamePlaces).to.equal(1);
    });
});
