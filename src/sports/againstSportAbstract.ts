import { AgainstSport } from "./againstSport";

export abstract class AgainstSportAbstract implements AgainstSport{
    constructor(public readonly nrOfHomePlaces: number, public readonly nrOfAwayPlaces: number) {
    }

    getNrOfGamePlaces(): number {
        return this.nrOfHomePlaces + this.nrOfAwayPlaces;
    }
}
