import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { User } from '../../model/user';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  user: User;

  constructor(private actroute: ActivatedRoute, private router: Router) { 
    this.actroute.queryParams.subscribe(
      params => {
        this.user = JSON.parse(params.special);
      }
    );
  }

  ngOnInit() {
  }

  galeria(user: User) {
    const extras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(user)
      }
    };
    this.router.navigate(['/galeria'], extras);
  }

}
