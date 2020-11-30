import { Component, OnInit } from "@angular/core";
import { Expert } from "src/app/models/expert.model";
import ExpertsData from "../../../../assets/data/experts.json";

@Component({
  selector: "app-feature",
  templateUrl: "./feature.component.html",
  styleUrls: ["./feature.component.css"],
})
export class FeatureComponent implements OnInit {
  experts: Expert[];

  constructor() {
    this.experts = ExpertsData.experts as Expert[];
  }

  ngOnInit(): void {}

  get expertsCount(): number {
    return this.experts.length;
  }
}
