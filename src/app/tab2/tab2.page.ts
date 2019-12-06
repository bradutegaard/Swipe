import { Component } from "@angular/core";
import { BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";
import { Profile } from "../profile";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"]
})
export class Tab2Page {
  myProfile = new Profile(
    "My Business Card",
    "/assets/JavisIndLogo.jpg",
    "Brad Utegaard",
    "IT Consultant",
    "14 W Mifflin St., Suite 314 Madison, WI",
    "Main Office: 608.620.5123",
    "Direct: 608.888.1640",
    "brad@javisind.com",
    "https://javisindustries.com"
  );
  qrData = "test";
  scannedCode = null;
  elementType: "url" | "canvas" | "img" = "canvas";

  constructor(private barcodeScanner: BarcodeScanner) {}

  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
    });
  }
}
