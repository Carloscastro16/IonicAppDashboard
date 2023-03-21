import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/auth.service';

@Component({
  selector: 'app-ardillas',
  templateUrl: './ardillas.page.html',
  styleUrls: ['./ardillas.page.scss', '../app.component.scss'],
})
export class ArdillasPage implements OnInit {

  constructor(
    public authService: AuthenticationService
  ) { }

  ngOnInit() {
  }

}
