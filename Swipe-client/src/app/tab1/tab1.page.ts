import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { CardsService } from "../services/cards.service";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page {
  constructor(private cardsService: CardsService) {}

  cards: Observable<any>;

  ngOnInit() {
    this.cards = this.cardsService.getCards();
  }
}
