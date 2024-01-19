import { Component, HostListener } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  CheckboxControlValueAccessor,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { matchPassword } from './matchpassword.validator';
import { UserService } from '../user.service';
import { doesEmailExist } from '../userCheck';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  isFormClicked: boolean = false;
  showErrorEmailExists: boolean = false;
  emailToSearch: string = '';
  users: any[] = [];
  newUser: any = {};
  arr: any[] = [];
  personInfo: FormGroup;
  constructor(private userService: UserService, private fb: FormBuilder) {
    this.personInfo = this.fb.group(
      {
        name: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern('[a-zA-Z]*'),
        ]),
        lastname: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
        ]),
        Email: new FormControl('', [Validators.required, Validators.email]),
        username: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(5),
        ]),
        cpassword: new FormControl('', [
          Validators.required,
          Validators.minLength(5),
        ]),
      },
      {
        validators: matchPassword,
      }
    );
  }

  SubmitBtn(Email: string) {
    this.emailToSearch = Email;
    if (this.personInfo.valid) {
      doesEmailExist(this.emailToSearch).then((emailExists: boolean) => {
        if (!emailExists) {
          const userData = this.personInfo.value;
          this.showErrorEmailExists = false;
          this.userService.addUser(userData).subscribe(
            (response) => {
              console.log('User added successfully:', response);
              this.personInfo.reset();
            },
            (error) => {
              console.error('Error adding user:', error);
            }
          );
        } else {
          this.showErrorEmailExists = true;
        }
      });
    }
  }

  @HostListener('document:click', ['$event'])
  handleClick(event: Event) {
    if (!(event.target as HTMLElement).closest('app-registration')) {
      this.isFormClicked = false;
    }
  }

  onFormClick() {
    this.isFormClicked = true;
  }

  shouldDisplayError(): boolean {
    return this.isFormClicked;
  }
  ngOnInit(){
    document.getElementById("nameent")?.focus();
  }
}
