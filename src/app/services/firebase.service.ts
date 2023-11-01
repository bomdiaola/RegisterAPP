import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Usuarios } from '../interface/usuarios';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class FirestoreService {
  collection(arg0: string) {
    throw new Error('Method not implemented.');
  }
  createDoc(datos: Usuarios, path: string, id: string) {
    throw new Error('Method not implemented.');
  }
  constructor(private firestore: AngularFirestore,
              private authFirebase: AngularFireAuth)
               {}

  getAsignaturas() {
    return this.firestore.collection('asignaturas').valueChanges();
  }

  getAsistencia() {
    return this.firestore.collection('asignaturas').valueChanges();
  }
  

}
