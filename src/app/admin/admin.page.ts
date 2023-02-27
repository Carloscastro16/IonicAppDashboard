import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../services/auth.service";
import { FirebaseDataService } from '../services/firebase-data.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Sensores } from '../interfaces';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  /* private itemsCollection: AngularFirestoreCollection<Sensores>;
  items: Observable<Sensores[]>; */
  registros = {
    iguana: 0,
    pajaros: 0,
    ardillas: 0
  };

  items: Observable<any[]>;
  iguanas: Observable<any[]>;
  pajaros: Observable<any[]>;
  ardillas: Observable<any[]>;

  constructor(
    public authService: AuthenticationService,
    public firebaseSerevice: FirebaseDataService,
    public afdb: AngularFireDatabase,
    private afs: AngularFirestore
  ) { 
    this.items = afdb.list('App/Sensores/').valueChanges();
    /* this.itemsCollection = afs.collection<Sensores>('App/Sensores/');
    this.items = this.itemsCollection.valueChanges(); */
    this.iguanas = afdb.list('App/detecciones/iguanas/').valueChanges();
    this.pajaros = afdb.list('App/detecciones/pajaros/').valueChanges();
    this.ardillas = afdb.list('App/detecciones/ardillas/').valueChanges();
  }
  ngOnInit() {
    console.log(this.iguanas);
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
