import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs';
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
  items: any;
  valorL: Observable<boolean>;
  data: any;
  actuadores: any;
  /* valorL: Subscription; */
  otherValue!: boolean;
  valorLed = false;
  valorBuzz =  false;
  valorDoor =  true;
  valorCam =  true;
  constructor(
    public authService: AuthenticationService,
    public fireService: FirebaseDataService,
    public afdb: AngularFireDatabase
  ) {
    this.fireService.getDataGenerales('App/Sensores/Generales')
      .subscribe(data => this.data = data);
    this.fireService.getDataGenerales('App/ZonaNorte/Actuadores')
      .subscribe(data => this.actuadores = data);
    /* this.items = afdb.object('App/Sensores/Generales').valueChanges()
                .subscribe(data => this.data = data); */
    // Object.keys(datos.historico) obtendria los labels del documento historico
    //Object.values(datos.historico) obtendria los valores del documento historico
    /* this.valorL = afdb.list('App/ZonaNorte/Actuadores/led1').valueChanges().subscribe(data => this.otherValue = data as unknown as boolean); */
    this.valorL = afdb.list('App/ZonaNorte/Actuadores/led1').valueChanges() as Observable<unknown> as Observable<boolean>;
    console.log(this.valorL)
  }
  dbLed = this.afdb.database.ref('App/ZonaNorte/Actuadores/led1');
  dbBuzz = this.afdb.database.ref('App/ZonaNorte/Actuadores/buzz');
  dbDoor = this.afdb.database.ref('App/ZonaNorte/Actuadores/puerta');
  dbCam = this.afdb.database.ref('App/ZonaNorte/Actuadores/cam');

  async ngOnInit() {
    this.dbBuzz.set(false);
    this.dbLed.set(false);
    this.dbDoor.set(false);
    this.dbCam.set(false);
    this.otherValue = await this.valorL.toPromise();
    console.log(this.otherValue)
    
  }
  luzOn(){
    this.otherValue = !this.otherValue;
    this.dbLed.set(this.otherValue);
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
    this.dbCam.set(this.valorCam);
  }
}
