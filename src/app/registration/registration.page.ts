import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from "../services/auth.service";
@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  constructor(
    public authService: AuthenticationService,
    public router: Router
  ) { }
  ngOnInit(){}
  signUp(email: any, password: any){
      this.authService.RegisterUser(email.value, password.value)      
      .then((res) => {
        this.router.navigate(['login']); 
        // Do something here
      }).catch((error) => {
        window.alert(error.message)
      })
  }
}