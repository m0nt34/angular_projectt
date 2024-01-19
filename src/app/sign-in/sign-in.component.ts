import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  CheckboxControlValueAccessor,
} from '@angular/forms';
import { doesEmailExist } from '../userCheck';
import { isEmailPasswordRight } from '../checkIfRIghtPassword';
import { ConstantPool } from '@angular/compiler';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  emailToSearch: string = '';
  Curpassword: string = '';
  doesEmailExist: boolean = false;
  showErrorEmailDoesNExists: boolean = false;
  showErrorPasswordDoesNotMatch: boolean = false;
  personInfo = new FormGroup({
    Email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  checkIfEx(itm: any, itm2: string) {
    this.emailToSearch = itm;
    this.Curpassword = itm2;
    doesEmailExist(this.emailToSearch)
      .then((emailExists: boolean) => {
        if (emailExists) {
          console.log(`Email ${this.emailToSearch} exists in the user data.`);
          this.doesEmailExist = true;
          this.submitBtnFunction(this.Curpassword);
        } else {
          console.log(
            `Email ${this.emailToSearch} does not exist in the user data.`
          );
          this.doesEmailExist = false;
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    this.showOrNotErrorMessage();
  }
  constructor(private appComponent: AppComponent, private router: Router) {}
  submitBtnFunction(Curpassword: string) {
    if (this.doesEmailExist) {
      isEmailPasswordRight(this.emailToSearch, this.Curpassword)
        .then((passwordsMatch: boolean) => {
          if (passwordsMatch) {
            this.appComponent.hideSignInLinks();
            this.showErrorPasswordDoesNotMatch = false;
            this.personInfo.reset()
            this.router.navigateByUrl('/home');
          } else {
            this.showErrorPasswordDoesNotMatch = true;
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }
  showOrNotErrorMessage() {
    if (this.doesEmailExist) {
      this.showErrorEmailDoesNExists = false;
    } else {
      this.showErrorEmailDoesNExists = true;
    }
  }
  ngOnInit(){
    document.getElementById("EmailEnterField")?.focus();
  }
}
