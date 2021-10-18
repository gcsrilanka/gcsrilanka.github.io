import { Component, OnInit } from "@angular/core";
import emailjs, { EmailJSResponseStatus } from "emailjs-com";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,  private toastr: ToastrService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit(e: Event){
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    } 
    emailjs.sendForm(
      "service_664o6wc",
      "template_sqhcmau",
      e.target as HTMLFormElement,
      "user_WyMiG19mwb6vTGJwqJq5C"
    )
    .then(
      (result: EmailJSResponseStatus) => {
        console.log(result.text);
        this.onReset();
      },
      (error) => {
        console.log(error.text);
        this.toastr.error('Try again', 'Sorry!' );
        e.preventDefault();
      }
    );
    this.toastr.success('submitted successfully', 'Thank you!' );
    e.preventDefault();
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
}

}
