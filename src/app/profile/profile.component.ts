import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  CheckboxControlValueAccessor,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { changeUserData } from '../changeUserInfo';
import { doesEmailExist } from '../userTosearchForProfileEdit';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  personInfo: FormGroup;
  nameField: string = '';
  email: string = '';
  showErrorEmailExists: boolean = false;
  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.personInfo = this.fb.group({
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
    });
  }
  editBtnFunction() {
    const editBtn = document.querySelector('form .edit-btn');
    if (editBtn?.innerHTML === 'edit') {
      editBtn.innerHTML = 'save';
      document.getElementById('nameent')?.focus();
      document.querySelectorAll('form div div input').forEach((inp) => {
        inp.removeAttribute('readonly');
      });
      console.log;
    } else if (editBtn?.innerHTML === 'save' && this.personInfo.valid) {
      doesEmailExist(this.personInfo.get('Email')?.value).then(
        (emailExists: boolean) => {
          if (!emailExists) {
            this.showErrorEmailExists = false;
            editBtn.innerHTML = 'edit';
            document.querySelectorAll('form div div input').forEach((inp) => {
              inp.setAttribute('readonly', 'readonly');
            });
            changeUserData(
              this.personInfo.get('name')?.value,
              this.personInfo.get('lastname')?.value,
              this.personInfo.get('Email')?.value,
              this.personInfo.get('username')?.value,
              this.personInfo.get('password')?.value,
              this.http
            );
          }else{ 
            this.showErrorEmailExists = true;
          }
        }
      );
    }
    if (editBtn?.innerHTML === 'რედაქტირება') {
      editBtn.innerHTML = 'შენახვა';
      document.getElementById('nameent')?.focus();
      document.querySelectorAll('form div div input').forEach((inp) => {
        inp.removeAttribute('readonly');
      });
      console.log;
    } else if (editBtn?.innerHTML === 'შენახვა' && this.personInfo.valid) {
      doesEmailExist(this.personInfo.get('Email')?.value).then(
        (emailExists: boolean) => {
          if (!emailExists) {
            this.showErrorEmailExists = false;
            editBtn.innerHTML = 'რედაქტირება';
            document.querySelectorAll('form div div input').forEach((inp) => {
              inp.setAttribute('readonly', 'readonly');
            });
            changeUserData(
              this.personInfo.get('name')?.value,
              this.personInfo.get('lastname')?.value,
              this.personInfo.get('Email')?.value,
              this.personInfo.get('username')?.value,
              this.personInfo.get('password')?.value,
              this.http
            );
          }else{ 
            this.showErrorEmailExists = true;
          }
        }
      );
    }
  }

  ngOnInit() {
    document.querySelectorAll('form div div input').forEach((inp) => {
      inp.setAttribute('readonly', 'readonly');
    });
    const storedUsers = localStorage.getItem('currentUser');

    if (storedUsers) {
      const currentUserArray = JSON.parse(storedUsers);
      const storedName = currentUserArray.name;
      const storedLastname = currentUserArray.lastname;
      const storedEmail = currentUserArray.Email;
      const storedUsername = currentUserArray.username;
      const storedPassword = currentUserArray.password;
      const storedId = currentUserArray.id;
      console.log(storedId);
      this.personInfo.patchValue({
        name: storedName,
        lastname: storedLastname,
        Email: storedEmail,
        username: storedUsername,
        password: storedPassword,
      });
    }
  }
}
