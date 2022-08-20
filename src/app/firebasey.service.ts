import { Injectable } from '@angular/core';
import { doc, docSnapshots, DocumentReference, Firestore } from '@angular/fire/firestore';
import { onSnapshot } from '@firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseyService {
  docy: DocumentReference;

  constructor(firestore: Firestore) {
    console.log('firebasey constr');

    this.docy = doc(firestore, 'foo/1');
    onSnapshot(this.docy, snapshot => {
      console.log(snapshot.data());
    })
  }
}
