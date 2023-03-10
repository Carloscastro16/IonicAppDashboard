import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/auth.service';

@Component({
  selector: 'app-pajaros',
  templateUrl: './pajaros.page.html',
  styleUrls: ['./pajaros.page.scss', '../app.component.scss'],
})
export class PajarosPage implements OnInit {

  constructor(
    public authService: AuthenticationService
  ) { }

  ngOnInit() {
  }

}
