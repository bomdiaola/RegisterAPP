import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Usuarios } from '../interface/usuarios';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authfirebase: AngularFireAuth) { }

  login(correo: string, password: string) {
    if (correo && password) {
      return this.authfirebase.signInWithEmailAndPassword(correo, password);
    } else {
      return Promise.reject('Correo o contraseña no válidos');
    }
  }

  logout() {
    this.authfirebase.signOut();
  }

  registrarUser(datos: Usuarios ) {
    return this.authfirebase.createUserWithEmailAndPassword(datos.email!, datos.password!);
  }
  
}
