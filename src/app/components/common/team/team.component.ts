import { Component, OnInit } from "@angular/core";
import { Expert } from "src/app/models/expert.model";

@Component({
  selector: "app-team",
  templateUrl: "./team.component.html",
  styleUrls: ["./team.component.css"],
})
export class TeamComponent implements OnInit {
  experts: Expert[];

  constructor() {
    this.experts = [
      new Expert(
        1,
        "Isuru Abeywardana",
        "Sabaragamuwa University",
        "https://avatars2.githubusercontent.com/u/7692626",
        "https://www.github.com/isuruAb",
        "https://www.facebook.com/isuruAb",
        "https://www.instagram.com/isuruab_/",
        "https://twitter.com/isuruAb"
      ),
      new Expert(
        2,
        "Madhushanka Padmal",
        "University of Moratuwa",
        "https://avatars0.githubusercontent.com/u/14261304",
        "https://github.com/CloudyPadmal",
        "https://www.facebook.com/cloudypadmal",
        "https://www.instagram.com/cloudypadmal",
        "https://twitter.com/Cloudypadmal"
      ),
      new Expert(
        3,
        "Dilum De Silva",
        "University of Webminister",
        "https://avatars2.githubusercontent.com/u/23298579",
        "https://github.com/dilum1995",
        "https://www.facebook.com/DilumMDeSilva",
        "https://www.instagram.com/dilum1995/",
        "https://twitter.com/dilum_de"
      ),
      new Expert(
        4,
        "Chamod Perera",
        "SLIIT | Wayamba University",
        "https://avatars1.githubusercontent.com/u/19349315",
        "https://github.com/Shehanka",
        "https://www.facebook.com/chamodshehanka",
        "https://www.instagram.com/chamodshehanka/",
        "https://twitter.com/chamodshehanka"
      ),
      new Expert(
        5,
        "Ahamed Safnaj",
        "SLIIT",
        "https://avatars0.githubusercontent.com/u/37530024",
        "https://github.com/Safnaj",
        "https://www.facebook.com/ahamed.safnaj",
        "https://www.instagram.com/iam_safnaj/",
        "https://twitter.com/iamSafnaj"
      ),
      new Expert(
        6,
        "Amila Gunarathne",
        "Sabaragamuwa University",
        "https://avatars3.githubusercontent.com/u/24237873",
        "https://github.com/amilabgunarathne",
        "https://www.facebook.com/Amila.B.Gunarathne",
        "https://www.instagram.com/",
        "https://twitter.com/"
      ),
      new Expert(
        7,
        "Hirantha Peiris",
        "Ruhuna University",
        "https://avatars3.githubusercontent.com/u/27503578",
        "https://github.com/hiranthaPeiris",
        "https://www.facebook.com/hiranSandman",
        "https://www.instagram.com/",
        "https://twitter.com/hirantha_peiris"
      ),
    ];
  }

  ngOnInit(): void {}
}
