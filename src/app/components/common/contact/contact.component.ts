import { Component, OnInit } from "@angular/core";
import emailjs, { EmailJSResponseStatus } from "emailjs-com";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        e.target as HTMLFormElement,
        "YOUR_USER_ID"
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
}
