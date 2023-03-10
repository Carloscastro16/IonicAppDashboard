import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../services/auth.service";
import { FirebaseDataService } from '../services/firebase-data.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Sensores } from '../interfaces';
import { Observable } from 'rxjs/Observable';
import { getDatabase } from "firebase/database";
import { User } from '../services/user';
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
  user!: string;
  uid!: any;
  items: Observable<any[]>;
  iguanas: Observable<any[]>;
  pajaros: Observable<any[]>;
  ardillas: Observable<any[]>;
  name!: string;
  constructor(
    public authService: AuthenticationService,
    public firebaseService: FirebaseDataService,
    public afdb: AngularFireDatabase,
  ) { 
    this.items = afdb.list('App/Sensores/Generales').valueChanges();
    /* this.itemsCollection = afs.collection<Sensores>('App/Sensores/');
    this.items = this.itemsCollection.valueChanges(); */
    this.iguanas = afdb.list('App/detecciones/iguanas/').valueChanges();
    this.pajaros = afdb.list('App/detecciones/pajaros/').valueChanges();
    this.ardillas = afdb.list('App/detecciones/ardillas/').valueChanges();
  }
  databaseRefBat = this.afdb.database.ref('App/Sensores/bat');
  
  async ngOnInit() {
    console.log(this.iguanas);
    this.uid = this.getUid();
    this.user = await this.firebaseService.getUserDisplayName(this.uid);
    
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
  async getUid(){
    const uid = await this.authService.getUID();
    return uid
    /* if(uid){
      this.uid = uid;
      console.log(uid);
    }else{
      console.log("no existe el uid");
    } */
    /* this.obtenerDatos(); */
  }
  obtenerDatos(id: any){
    const path = 'users/';
    this.firebaseService.getDoc<User>(path, id).subscribe((res: any) =>{
      console.log(res?.displayName);
      this.name = res.displayName;
    });
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
