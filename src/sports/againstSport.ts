export abstract class AgainstSport{
    constructor(public readonly nrOfHomePlaces: number, public readonly nrOfAwayPlaces: number) {
    }

    getNrOfGamePlaces(): number {
        return this.nrOfHomePlaces + this.nrOfAwayPlaces;
    }
}
