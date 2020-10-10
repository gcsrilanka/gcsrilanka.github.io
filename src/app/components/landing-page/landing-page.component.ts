import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scrollToElement(event, item) {
    let element = document.getElementById(item);
    element.scrollIntoView({ behavior: "smooth" });
  }

}
