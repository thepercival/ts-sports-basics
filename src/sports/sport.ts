
import { SeatConfig } from './seatConfig';
import { SportCustomId } from './sportCustomId';

export interface Sport { 
    name: string;
    defaultSeatConfig: SeatConfig;
    customId: SportCustomId|undefined;
}
