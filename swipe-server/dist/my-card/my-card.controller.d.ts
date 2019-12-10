import { MyCardService } from './my-card.service';
export declare class MyCardController {
    private myCardService;
    constructor(myCardService: MyCardService);
    getMyCard(): Promise<import("../models/card").Card>;
}
