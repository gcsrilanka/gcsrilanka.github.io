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
        "service_664o6wc",
        "template_sqhcmau",
        e.target as HTMLFormElement,
        "user_WyMiG19mwb6vTGJwqJq5C"
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
