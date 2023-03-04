import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../services/auth.service";
import { FirebaseDataService } from '../services/firebase-data.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-camaras',
  templateUrl: './camaras.page.html',
  styleUrls: ['./camaras.page.scss', '../app.component.scss'],
})
export class CamarasPage implements OnInit {

  items: Observable<any[]>;
  iguanas: Observable<any[]>;
  pajaros: Observable<any[]>;
  ardillas: Observable<any[]>;

  constructor(
    public authService: AuthenticationService,
    public firebaseSerevice: FirebaseDataService,
    public afdb: AngularFireDatabase,
    private afs: AngularFirestore
  ){
    this.items = afdb.list('App/Sensores/Generales').valueChanges();
    /* this.itemsCollection = afs.collection<Sensores>('App/Sensores/');
    this.items = this.itemsCollection.valueChanges(); */
    this.iguanas = afdb.list('App/detecciones/iguanas/').valueChanges();
    this.pajaros = afdb.list('App/detecciones/pajaros/').valueChanges();
    this.ardillas = afdb.list('App/detecciones/ardillas/').valueChanges();
  
  }

  ngOnInit() {
  }

}
