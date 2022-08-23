import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  csDocument: Observable<any>;
  firestoreDoc: AngularFirestoreDocument<any>;

  constructor(private firestore: AngularFirestore) {
    this.csDocument = firestore.doc('data/cs').get()
    this.firestoreDoc = firestore.doc('col/firestoreDoc');
  }

  createFirestoreDoc() {
    this.firestoreDoc.set({'foo': 'bar'})
  }
}
