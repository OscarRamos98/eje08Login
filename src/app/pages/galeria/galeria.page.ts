import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../model/user';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.page.html',
  styleUrls: ['./galeria.page.scss'],
})
export class GaleriaPage implements OnInit {

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

}
