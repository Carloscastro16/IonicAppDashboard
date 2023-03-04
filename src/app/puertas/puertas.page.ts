import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from "../services/auth.service";
import { FirebaseDataService } from '../services/firebase-data.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-puertas',
  templateUrl: './puertas.page.html',
  styleUrls: ['./puertas.page.scss', '../app.component.scss'],
})
export class PuertasPage implements OnInit {
  items: Observable<any[]>;
  valorLed =  true;
  valorBuzz =  true;
  valorDoor =  true;
  valorCam =  true;
  constructor(
    public authService: AuthenticationService,
    public firebaseSerevice: FirebaseDataService,
    public afdb: AngularFireDatabase
  ) { 
    this.items = afdb.list('App/Sensores/Generales').valueChanges();
  }
  dbLed = this.afdb.database.ref('App/ZonaNorte/Actuadores/led1');
  dbBuzz = this.afdb.database.ref('App/ZonaNorte/Actuadores/buzz');
  dbDoor = this.afdb.database.ref('App/ZonaNorte/Leds/led1');
  dbCam = this.afdb.database.ref('App/ZonaNorte/Leds/led1');

  ngOnInit() {
  }
  
  luzOn(){
    this.valorLed = !this.valorLed;
    this.dbLed.set(this.valorLed);
  }
  sonidoOn(){
    this.valorBuzz = !this.valorBuzz;
    this.dbBuzz.set(this.valorBuzz);
  }
  doorOn(){
    this.valorDoor = !this.valorDoor;
    this.dbDoor.set(this.valorDoor);
  }
  camOn(){
    this.valorCam = !this.valorCam;
    this.dbDoor.set(this.valorCam);
  }
}
