import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/auth.service';

@Component({
  selector: 'app-coaties',
  templateUrl: './coaties.page.html',
  styleUrls: ['./coaties.page.scss', '../app.component.scss'],
})
export class CoatiesPage implements OnInit {

  constructor(
    public authService: AuthenticationService
  ) { }

  ngOnInit() {
  }

}
