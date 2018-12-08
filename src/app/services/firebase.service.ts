import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
// import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  // public user:Observable<firebase.User>;
  // authState:any=null;
  constructor(public db: AngularFirestore) {}

  getUser(userKey){
    return this.db.collection('notes').doc(userKey).snapshotChanges();
  }

  updateUser(userKey, value){
    // value.nameToSearch = value.name.toLowerCase();
    return this.db.collection('notes').doc(userKey).set(value);
  }

  deleteUser(userKey){
    return this.db.collection('notes').doc(userKey).delete();
  }

  getUsers(){
    return this.db.collection('notes').snapshotChanges();
  }
  
  createUser(value){
    return this.db.collection('notes').add({
      name: value.name,
      // nameToSearch: value.name.toLowerCase(),
      description: value.description
    });
  }
}
