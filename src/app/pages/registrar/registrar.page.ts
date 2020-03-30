import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {UserService} from '../../services/user.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {
  formRegistrar: FormGroup;

  constructor(private router: Router,  private fb: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm(): void {
    this.formRegistrar = this.fb.group({
      name: ['', Validators.compose([Validators.required])],
      lastName: ['', Validators.compose([Validators.required])],
      gender: ['', Validators.compose([Validators.required])],
      rfc: ['', Validators.compose([Validators.required, Validators.pattern('[A-Z]{4}[0-9]{6}[A-Z]{3}')])],
      date: ['', Validators.compose([Validators.required])],
      photo: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]+@[a-zA-Z]+\.[a-z]+')])],
      password: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z0-9!_#$%&/()=?¡]+')])],
      r_password: ['', Validators.compose([Validators.required])]
    });
  }


  registrar() {
    if (this.formRegistrar.get('gender').value === '') {
      this.formRegistrar.get('gender').setValue('Hombre');
    }

    if (this.formRegistrar.get('date').value === '') {
      this.formRegistrar.get('date').setValue('1990-02-19');
    }

    if (this.formRegistrar.valid) {
      if (this.formRegistrar.get('password').value === this.formRegistrar.get('r_password').value) {
        this.userService.newUser({
          name: {
            firstName: this.formRegistrar.get('name').value,
            lastName: this.formRegistrar.get('lastName').value,
            fullName: this.formRegistrar.get('name').value + ' ' + this.formRegistrar.get('lastName').value
          },
          email: this.formRegistrar.get('email').value,
          photo: this.formRegistrar.get('photo').value,
          password: this.formRegistrar.get('password').value,
          birthday: this.formRegistrar.get('date').value,
          gender: this.formRegistrar.get('gender').value,
          rfc: this.formRegistrar.get('rfc').value,
          interests: [
            {interest: 'Caminar'}
          ],
          gallery: [
            {photo: 'https://image.flaticon.com/icons/svg/1077/1077063.svg', description: 'No hay descripcion'}
          ],
          active: true
        });
        this.router.navigate(['/home']);
      }
    }
  }
}
