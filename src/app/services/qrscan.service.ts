import { Injectable } from "@angular/core";
import { QRScanner, QRScannerStatus } from "@ionic-native/qr-scanner/ngx";

@Injectable({
  providedIn: "root"
})
export class QRScanService {
  constructor(private qrScanner: QRScanner) {}

  // optionally request the permission early
  scanQR() {
    this.qrScanner
      .prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          // camera permission granted

          // start scanning
          let scanSub = this.qrScanner.scan().subscribe((text: string) => {
            console.log("Scanned something", text);

            this.qrScanner.hide(); // hide camera preview
            scanSub.unsubscribe(); // stop scanning
          });
        } else if (status.denied) {
          // camera permission was permanently denied
          // you must use QRScanner.openSettings() method to guide the user to the settings
          // page, they can grant permission from there
        } else {
          // permission was denied but not permanently. You can get permission at a later time.
        }
      })
      .catch((e: any) => console.log("Error is", e));
  }
}
