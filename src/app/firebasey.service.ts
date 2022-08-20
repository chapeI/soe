import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseyService {
  item: Observable<any>;
  private itemDoc: AngularFirestoreDocument;

  constructor(firestore: AngularFirestore) {
    this.itemDoc = firestore.doc('items/1')
    this.item = this.itemDoc.valueChanges();
  }

  getItem() {
    return this.item;
  }
}
