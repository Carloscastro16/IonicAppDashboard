import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { getDatabase } from "firebase/database";
@Injectable({
  providedIn: 'root'
})
export class FirebaseDataService {

  constructor(private FireStore: AngularFirestore,
    public afdb: AngularFireDatabase) { }

  /* Funcion general para añadir datos a la base */
  createDoc<tipo>(data: tipo, enlace: string){
    const itemsCollection: AngularFirestoreCollection<tipo> = 
      this.FireStore.collection<tipo>(enlace);
      return itemsCollection.add(data);
  }
  /* updateDoc(path, id){
  
  } */
  getDataGenerales(path: string){
    return this.afdb.object(path).valueChanges();
  }
  getDoc<tipo>(path: string){
    const doc: AngularFirestoreDocument<tipo> = this.FireStore.doc(path);
    return doc.valueChanges();
  }
  getColl<tipo>(path: string){
    const collection: AngularFirestoreCollection<tipo> = this.FireStore.collection(path);
    return collection.valueChanges();
  }
}
