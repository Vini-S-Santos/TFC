import { IBodyEditMatche } from './IBodyEditMatche';

export interface IBodyCreateMatche extends IBodyEditMatche {
  homeTeamId: number;
  awayTeamId: number;
}
