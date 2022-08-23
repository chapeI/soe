import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { RequirementsService } from './requirements.service';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  csDocument: AngularFirestoreDocument<any>
  cs: any

  constructor(
    firestore: AngularFirestore,
    private requirementsService: RequirementsService,
    )
      {
        this.csDocument = firestore.doc('data/cs')
      }

  createFirestoreDoc()
  {
    this.cs = this.requirementsService.cs
    this.csDocument.set(this.cs)
  }
}
