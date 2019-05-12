import { Curse } from './curse';
import { Item } from './item';

export interface Hero {
  name: string,
  hitPoints: number,
  defense: number,
  ability: string,
  abilityDescription: string,
  img: string
  items?: Item[];
  curse?: Curse;
}
