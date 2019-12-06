import { Component } from "@angular/core";
import { Contact } from "../contact";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page {
  contacts: Contact[] = [
    {
      imgPath: "/assets/joesPlumbing.png",
      name: "Joe the Plumber",
      position: "Head Plumber",
      address: "5443 W Washington Ave., Madison, WI",
      officePhone: "Main Office: 608.433.2311",
      directPhone: "Direct: 608.433.2312",
      email: "joe@joesPlumbing.com",
      website: "https://joesplumbing.com"
    },
    {
      imgPath: "/assets/potter&Brick.png",
      name: "Harry Potter",
      position: "CEO",
      address: "9 and 3 Quarter Dr., Madison, WI",
      officePhone: "Main Office: 608.777.1211",
      directPhone: "Direct: 608.777.1213",
      email: "harry@potter&brick.com",
      website: "https://potter&brick.com"
    },
    {
      imgPath: "/assets/acme.png",
      name: "Bugs Bunny",
      position: "Film Actor",
      address: "1 W Hollywood Ave. Hollywood, CA",
      officePhone: "Main Office: 733.432.5123",
      directPhone: "Direct: 733.432.5125",
      email: "bugs@acme.com",
      website: "https://acme.com"
    }
  ];

  constructor() {}
}
