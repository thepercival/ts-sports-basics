export class TogetherSport{

    constructor(public readonly nrOfGamePlaces: number|undefined) {
    }

    getNrOfGamePlaces(): number|undefined {
        return this.nrOfGamePlaces;
    }
}
