import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  firestoreDocument: Observable<any>;

  constructor(firestore: AngularFirestore) {
    this.firestoreDocument = firestore.doc('data/cs').get()
  }
}
