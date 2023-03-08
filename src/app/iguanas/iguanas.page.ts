import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/auth.service';

@Component({
  selector: 'app-iguanas',
  templateUrl: './iguanas.page.html',
  styleUrls: ['./iguanas.page.scss', '../app.component.scss'],
})
export class IguanasPage implements OnInit {

  constructor(
    public authService: AuthenticationService
  ) { }

  ngOnInit() {
  }

}
