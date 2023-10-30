import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Usuarios } from '../interface/usuarios';

@Injectable({
  providedIn: 'root'
})

export class FirestoreService {
  createDoc(datos: Usuarios, path: string, id: string) {
    throw new Error('Method not implemented.');
  }
  constructor(private firestore: AngularFirestore) {}

  getAsignaturas() {
    return this.firestore.collection('asignaturas').valueChanges();
  }

  getAsistencia() {
    return this.firestore.collection('asignaturas').valueChanges();
  }
}
