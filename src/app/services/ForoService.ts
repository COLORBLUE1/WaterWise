import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ForoService {
  constructor(private firestore: AngularFirestore) {}

  getForos(): Observable<any[]> {
    return this.firestore.collection('Foros').valueChanges({ idField: 'id' });
  }
}