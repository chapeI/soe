import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  csDocument: AngularFirestoreDocument<any>;

  constructor(firestore: AngularFirestore) {
    this.csDocument = firestore.doc('data/cs')
  }

  createFirestoreDoc() {
    this.csDocument.set(
      {
        'core': {
          'weight': '10',
          'courses': [
            {'name': 'data structures'},
            {'name': 'operating systems'},
          ],
        },
        'math': {
          'weight': '2',
          'courses': [
            {'name': 'calculus'},
            {'name': 'linear algebra'},
          ],
        },
      }
    )
  }
}
