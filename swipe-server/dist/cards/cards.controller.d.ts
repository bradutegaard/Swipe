import { CardsService } from './cards.service';
export declare class CardsController {
    private cardsService;
    constructor(cardsService: CardsService);
    getCards(): Promise<import("../models/card").Card[]>;
}
