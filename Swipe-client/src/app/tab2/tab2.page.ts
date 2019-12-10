import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";
import { CardsService } from "../services/cards.service";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"]
})
export class Tab2Page {
  qrData = "test";
  scannedCode = null;
  elementType: "url" | "canvas" | "img" = "canvas";
  myCard: Observable<any>;

  constructor(
    private barcodeScanner: BarcodeScanner,
    private cardsService: CardsService
  ) {}

  ngOnInit() {
    this.myCard = this.cardsService.getMyCard();
  }

  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
    });
  }
}
