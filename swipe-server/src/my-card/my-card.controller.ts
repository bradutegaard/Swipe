import { Controller, Get } from '@nestjs/common';
import { MyCardService } from './my-card.service';

@Controller('my-card')
export class MyCardController {
  constructor(private myCardService: MyCardService) {}

  @Get()
  getMyCard() {
    return this.myCardService.getMyCard();
  }
}
