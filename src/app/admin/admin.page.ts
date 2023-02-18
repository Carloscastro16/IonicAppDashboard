import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../services/auth.service";
import { FirebaseDataService } from '../services/firebase-data.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Sensores } from '../interfaces';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  hum = false;
  sensores = [
    {
      bat: 0,
      hum:0,
      led: true,
      temp: 0
    },
    {
      led: true,
      temp: 0,
      hum:0,
      bat: 0
    }
  ];
  sensor = {
    bat: 0,
    hum:0,
    led: true,
    temp: 0
  }
  items: Observable<any[]>;
  constructor(
    public authService: AuthenticationService,
    public firebaseService: FirebaseDataService,
    public afdb: AngularFireDatabase
    
  ) { 
    this.items = afdb.list('App/Sensores/').valueChanges();
  }
  ngOnInit() {
    console.log("Lista: "+this.items);
    /* const path = "App/Sensores/";
    this.firebaseService.getDoc<Sensores>(path).subscribe(res => {
      console.log("humedad: " + res?.hum);
      console.log("Bateria: " + res?.bat);
      console.log("led: " + res?.led);
      
    }) */
    /* this.firebaseService.getAll<string>('App/sensores').then(res => {
      res.subscribe();
    }) */
    /* this.firebaseService.getColl<boolean>("App/Sensores/led").subscribe(res => {
      if(res != undefined){
        this.hum = res;
      }
    }) */
  }

  /* guardarDatos(){
    const path = 'Sensores';
    const newled: led = {
      estado: false
    };
    this.firebaseService.createDoc<boolean>(estadoled, path).then((res) => {
      console.log('Firebase response: ' + res);
    })
  } */
  
}
