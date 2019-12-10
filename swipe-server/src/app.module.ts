import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CardsService } from './cards/cards.service';
import { CardsController } from './cards/cards.controller';
import { MyCardService } from './my-card/my-card.service';
import { MyCardController } from './my-card/my-card.controller';

@Module({
  imports: [],
  controllers: [AppController, CardsController, MyCardController],
  providers: [AppService, CardsService, MyCardService],
})
export class AppModule {}
