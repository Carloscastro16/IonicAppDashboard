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
  dbLed = this.afdb.database.ref('App/Sensores/led');
  dbBuzz = this.afdb.database.ref('App/Sensores/buzz');
  dbDoor = this.afdb.database.ref('App/Sensores/door');
  dbCam = this.afdb.database.ref('App/Sensores/cam');

  ngOnInit() {
  }
  
  luzOn(){
    this.valorLed = !this.valorLed;
    this.dbLed.set(this.valorLed);
  }
  sonidoOn(){
    this.valorBuzz = !this.valorBuzz;
    this.dbLed.set(this.valorBuzz);
  }
  doorOn(){
    this.valorDoor = !this.valorDoor;
    this.dbLed.set(this.valorDoor);
  }
  camOn(){
    this.valorCam = !this.valorCam;
    this.dbLed.set(this.valorCam);
  }
}
