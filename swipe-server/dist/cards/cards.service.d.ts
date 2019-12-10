import { Card } from '../models/card';
export declare class CardsService {
    cards: Card[];
    getCards(): Promise<Card[]>;
}
