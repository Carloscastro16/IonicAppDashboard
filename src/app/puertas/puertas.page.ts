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
  booleanValue$!: boolean;
  items: any;
  data: any;
  actuadores: any;
  /* valorL: Subscription; */
  otherValue!: boolean;
  valorLed = false;
  valorBuzzS =  false;
  valorBuzzN =  false;
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
    this.afdb.object<boolean>('App/ZonaNorte/Actuadores/led1').valueChanges().subscribe((booleanValue) => {
      if (booleanValue == true) {
        this.booleanValue$ = booleanValue;
      }else if(booleanValue == false){
        this.booleanValue$ = booleanValue;
      }
    });
    this.afdb.object<boolean>('App/ZonaSur/Actuadores/buzz').valueChanges().subscribe((valorBuzzS) => {
      if (valorBuzzS == true) {
        this.valorBuzzS = valorBuzzS;
      }else if(valorBuzzS == false){
        this.valorBuzzS = valorBuzzS;
      }
    });
    this.afdb.object<boolean>('App/ZonaNorte/Actuadores/buzz').valueChanges().subscribe((valorBuzzN) => {
      if (valorBuzzN == true) {
        this.valorBuzzN = valorBuzzN;
      }else if(valorBuzzN == false){
        this.valorBuzzN = valorBuzzN;
      }
    });
  }
  dbLed = this.afdb.database.ref('App/ZonaNorte/Actuadores/led1');
  dbBuzzN = this.afdb.database.ref('App/ZonaNorte/Actuadores/buzz');
  dbBuzzS = this.afdb.database.ref('App/ZonaSur/Actuadores/buzz');
  dbCam = this.afdb.database.ref('App/ZonaNorte/Actuadores/cam');

  async ngOnInit() {
    console.log(this.otherValue)
    
  }
  luzOn(){
    this.booleanValue$ = !this.booleanValue$;
    this.dbLed.set(this.booleanValue$);
  }
  sonidoNOn(){
    this.valorBuzzN = !this.valorBuzzN;
    this.dbBuzzN.set(this.valorBuzzN);
  }
  sonidoSOn(){
    this.valorBuzzS = !this.valorBuzzS;
    this.dbBuzzS.set(this.valorBuzzS);
  }
  camOn(){
    this.valorCam = !this.valorCam;
    this.dbCam.set(this.valorCam);
  }
}
