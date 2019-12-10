import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CardsService {
  constructor(private httpClient: HttpClient) {}

  getMyCard() {
    return this.httpClient.get("http://192.168.1.22:3000/my-card");
  }

  getCards() {
    return this.httpClient.get("http://192.168.1.22:3000/cards");
  }
}
