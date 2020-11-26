import { Component, OnInit } from "@angular/core";
import { Expert } from "src/app/models/expert.model";
import ExpertsData from "../../../../assets/data/experts.json";

@Component({
  selector: "app-team",
  templateUrl: "./team.component.html",
  styleUrls: ["./team.component.css"],
})
export class TeamComponent implements OnInit {
  experts: Expert[];

  constructor() {
    this.experts = ExpertsData.experts as Expert[];
  }

  ngOnInit(): void {}
}
