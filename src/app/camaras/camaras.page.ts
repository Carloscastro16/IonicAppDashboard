import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../services/auth.service";
import { FirebaseDataService } from '../services/firebase-data.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs/Observable';
import { AngularFireStorage } from '@angular/fire/compat/storage';

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
  profileUrl: Observable<string | null>;
  urls!: any[];
  constructor(
    public authService: AuthenticationService,
    public firebaseSerevice: FirebaseDataService,
    public afdb: AngularFireDatabase,
    private afs: AngularFirestore,
    private storage: AngularFireStorage
  ){
    this.items = afdb.list('App/Sensores/').valueChanges();
    /* this.itemsCollection = afs.collection<Sensores>('App/Sensores/');
    this.items = this.itemsCollection.valueChanges(); */
    this.iguanas = afdb.list('App/detecciones/iguanas/').valueChanges();
    this.pajaros = afdb.list('App/detecciones/pajaros/').valueChanges();
    this.ardillas = afdb.list('App/detecciones/ardillas/').valueChanges();
    const ref = this.storage.ref('images/Ardilla_detected_507.jpg');
    this.profileUrl = ref.getDownloadURL();
    /* ref.listAll().subscribe(result => {
      result.items.forEach(itemRef => {
        itemRef.getDownloadURL().then(url => {
          this.urls.push(url);
        });
      });
    }); */
    console.log(this.urls);
    
  }
  async getUrls() {
    const result = await this.storage.ref('images/').listAll().toPromise();
    const observables = result.items.map(itemRef => itemRef.getDownloadURL());
    const urls = await Promise.all(observables);
    this.urls = urls;
  }
  ngOnInit() {
    this.getUrls();
  }

}
