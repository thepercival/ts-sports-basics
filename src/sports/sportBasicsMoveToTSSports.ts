
import { OneVsOneSport } from './oneVsOneSport';
import { SportCustomId } from './sportCustomId';
import { TogetherSport } from './togetherSport';
import { TwoVsTwoSport } from './twoVsTwoSport';

export interface SportBasics { 
    name: string;
    defaultSport: TogetherSport|OneVsOneSport|TwoVsTwoSport;
    defaultNrOfReferees: number;
    customId: SportCustomId|undefined;
}
