import { HomeVsAwaySport } from "../sports/homeVsAwaySport";
import { TogetherSport } from "../sports/togetherSport";
import { NorthSouthVsEastWestSport } from "../sports/northSouthVsEastWestSport";
import { SelfRefereeScope } from "../selfRefereeScope";

export class PouleStructure extends Array<number> {

    constructor(...nrOfPlaces: number[]) {
        super();
        for (let nrOfPlacesIt of nrOfPlaces) {
            this.push(nrOfPlacesIt);
        }
        this.sort((nrOfPlacesPouleA: number, nrOfPlacesPouleB: number): number => {
            return nrOfPlacesPouleA > nrOfPlacesPouleB ? -1 : 1;
        });
    }

    public getNrOfPoules(): number {
        return this.length;
    }

    public getNrOfPlaces(): number {
        return this.reduce((accumulator, currentValue) => accumulator + currentValue);
    }

    public getBiggestPoule(): number {
        return this[0];
    }

    public getSmallestPoule(): number {
        return this[this.length - 1];
    }

    public isBalanced(): boolean {
        return this.getBiggestPoule() === this.getSmallestPoule();
    }

    public isSelfRefereeOtherPoulesAvailable(): boolean {
        return this.getNrOfPoules() > 1;
    }

    public isSelfRefereeSamePouleAvailable(sports: (HomeVsAwaySport | NorthSouthVsEastWestSport | TogetherSport)[]): boolean {
        return sports.every((sport: HomeVsAwaySport | NorthSouthVsEastWestSport | TogetherSport) => {
            const nrOfGamePlaces = sport instanceof TogetherSport ? sport.nrOfGamePlaces : sport.getNrOfGamePlaces();
            return nrOfGamePlaces !== undefined && nrOfGamePlaces < this.getSmallestPoule();
        });
    }
}