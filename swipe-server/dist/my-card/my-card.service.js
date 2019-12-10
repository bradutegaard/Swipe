"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
let MyCardService = class MyCardService {
    constructor() {
        this.myCard = {
            imgPath: '/assets/JavisIndLogo.png',
            name: 'Brad Utegaard',
            position: 'IT Consultant',
            address: '14 W Mifflin St. Madison, WI',
            officePhone: 'Main Office: 608.620.5123',
            directPhone: 'Direct: 608.888.1640',
            email: 'brad@javisind.com',
            website: 'https://javisindustries.com',
        };
    }
    async getMyCard() {
        return this.myCard;
    }
};
MyCardService = __decorate([
    common_1.Injectable()
], MyCardService);
exports.MyCardService = MyCardService;
//# sourceMappingURL=my-card.service.js.map