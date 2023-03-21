import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { getDatabase } from "firebase/database";
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from './user'
@Injectable({
  providedIn: 'root'
})
export class FirebaseDataService {

  constructor(
    private FireStore: AngularFirestore,
    public afdb: AngularFireDatabase,
    public authFirebase: AngularFireAuth
    ) { }

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
  getDoc<tipo>(path: string, uid:string){
    return this.FireStore.collection(path).doc<tipo>(uid).valueChanges();
    /* const doc: AngularFirestoreDocument<tipo> = this.FireStore.doc(path + uid);
    return doc.valueChanges(); */
  }
  getColl<tipo>(path: string){
    const collection: AngularFirestoreCollection<tipo> = this.FireStore.collection(path);
    return collection.valueChanges();
  }
  async getUserDisplayName(uid: string): Promise<string> {
    try {
      const userDoc = await this.FireStore.collection('users/').doc(uid).get().toPromise();
      if (userDoc.exists) {
        const userData = userDoc.data() as User;
        return userData?.displayName;
      }
      return "null";
    } catch (error) {
      console.error('Error fetching user data:', error);
      return "null";
    }
  }
}
