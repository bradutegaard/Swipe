import { Injectable } from '@nestjs/common';
import { Card } from '../models/card';

@Injectable()
export class MyCardService {
  myCard: Card = {
    imgPath: '/assets/JavisIndLogo.png',
    name: 'Brad Utegaard',
    position: 'IT Consultant',
    address: '14 W Mifflin St. Madison, WI',
    officePhone: 'Main Office: 608.620.5123',
    directPhone: 'Direct: 608.888.1640',
    email: 'brad@javisind.com',
    website: 'https://javisindustries.com',
  };

  async getMyCard(): Promise<Card> {
    return this.myCard;
  }
}
