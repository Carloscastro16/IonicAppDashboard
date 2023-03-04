import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from "../services/auth.service";
import { FirebaseDataService } from '../services/firebase-data.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-deteccion',
  templateUrl: './deteccion.page.html',
  styleUrls: ['./deteccion.page.scss', '../app.component.scss'],
})
export class DeteccionPage implements OnInit {
  items: Observable<any[]>;
  registrosN: Observable<any[]>;
  registrosS: Observable<any[]>;
  constructor(
    public authService: AuthenticationService,
    public firebaseSerevice: FirebaseDataService,
    public afdb: AngularFireDatabase,
    private afs: AngularFirestore
  ) { 
    this.items = afdb.list('App/Sensores/Generales').valueChanges();
    this.registrosN = afdb.list('App/ZonaNorte/Registros/Avisos').valueChanges();
    this.registrosS = afdb.list('App/ZonaSur/Registros/Avisos').valueChanges();
  }

  ngOnInit() {
  }

}
