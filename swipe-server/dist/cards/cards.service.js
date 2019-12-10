"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
let CardsService = class CardsService {
    constructor() {
        this.cards = [
            {
                imgPath: '/assets/joesPlumbing.png',
                name: 'Joe the Plumber',
                position: 'Head Plumber',
                address: '5443 W Washington Ave., Madison, WI',
                officePhone: 'Main Office: 608.433.2311',
                directPhone: 'Direct: 608.433.2312',
                email: 'joe@joesPlumbing.com',
                website: 'https://joesplumbing.com',
            },
            {
                imgPath: '/assets/potter&Brick.png',
                name: 'Harry Potter',
                position: 'CEO',
                address: '9 and 3 Quarter Dr., Madison, WI',
                officePhone: 'Main Office: 608.777.1211',
                directPhone: 'Direct: 608.777.1213',
                email: 'harry@potter&brick.com',
                website: 'https://potter&brick.com',
            },
            {
                imgPath: '/assets/acme.png',
                name: 'Bugs Bunny',
                position: 'Film Actor',
                address: '1 W Hollywood Ave. Hollywood, CA',
                officePhone: 'Main Office: 733.432.5123',
                directPhone: 'Direct: 733.432.5125',
                email: 'bugs@acme.com',
                website: 'https://acme.com',
            },
        ];
    }
    async getCards() {
        return this.cards;
    }
};
CardsService = __decorate([
    common_1.Injectable()
], CardsService);
exports.CardsService = CardsService;
//# sourceMappingURL=cards.service.js.map