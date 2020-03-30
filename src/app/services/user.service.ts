import { Injectable } from '@angular/core';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [];

  constructor() {
    this.users.push({
      name: {
       firstName: 'Oscar Enrique',
       lastName: 'Jaime Ramos',
       fullName: 'Oscar Enrique Jaime Ramos'
      },
      email: 'osenjaimera@ittepic.edu.mx',
      photo: 'https://image.flaticon.com/icons/svg/1077/1077063.svg',
      password: 'contraseña',
      birthday: new Date('1998/09/01'),
      gender: 'Masculino',
      rfc: '16400937',
      interests: [
        {
          interest: 'Programar'
        }
      ],
      gallery: [
        {
         photo: 'https://image.flaticon.com/icons/svg/1077/1077063.svg',
         description: 'hola'
        }
      ],
      active: true
     });
   }

   getUsers(): User[] {
    return this.users;
  }


  newUser(user: User): void {
    this.users.push(user);
  }

}
