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

  createCSFirestoreDoc()
  {
    console.log('creating CS firestore doc for');
    this.cs = this.requirementsService.getCS()
    console.log(this.cs);
    this.csDocument.set(this.cs)
  }
}
