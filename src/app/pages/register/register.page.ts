import { Component, OnInit } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Usuarios } from 'src/app/interface/usuarios';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage {
  acceptTerms: boolean = false; 

  datos: Usuarios = {	
    nombre: null!,
    email: null!,
    password: null!,
    perfil: 'Alumno',
    uid: null!,
    
  }

  

  constructor(private auth: AuthService,
              private firestore: FirestoreService) { }

async registrar() {
  console.log('datos', this.datos);
  const res = await this.auth.registrarUser(this.datos).catch(err => {
    console.log('error', err);
  });

  if (res && res.user) {
    console.log('registro exitoso');
    const path = 'Usuarios';
    const id = res.user.uid;
    this.datos.uid = res.user.uid;
    this.datos.password = null;
    await this.firestore.createDoc(this.datos, path, id);
  } else {
    console.log('No se pudo registrar el usuario');
  }
}




}
