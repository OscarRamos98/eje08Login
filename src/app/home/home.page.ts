import { Component } from '@angular/core';
import {User} from '../model/user';
import {UserService} from '../services/user.service';
import { Router, NavigationExtras } from '@angular/router';
import {FormGroup, FormBuilder,  Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  users: User[] = [];
  myForm: FormGroup;

  constructor(private userService: UserService, private router: Router, private fb: FormBuilder) {
    this.users = this.userService.getUsers();
    this.initializeForm();
  }

  initializeForm(): void {
    this.myForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.myForm.valid) {
      this.users.forEach(user => {
        if (this.myForm.get('email').value === user.email && this.myForm.get('password').value === user.password) {
          this.access(true, user);
        }
      });
    } else {
      this.access(false, null);
    }
  }

  access(access: boolean, user: User): void {
    if (access) {
      this.myForm.get('email').setValue('');
      this.myForm.get('password').setValue('');
      this.Profile(user);
    }
  }

  Profile(user: User) {
    const extras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(user)
      }
    };
    this.router.navigate(['/perfil'], extras);
  }

  registrar() {
    this.router.navigate(['/registrar']);
  }

}
