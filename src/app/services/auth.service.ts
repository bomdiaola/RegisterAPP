import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

interface UserData {
  nombre: string;
  email: string;
  password: string;
  rol: string;
  uid: string;
}



@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private authfirebase: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router) {

  }

  login(correo: string, password: string) {
    return this.authfirebase.signInWithEmailAndPassword(correo, password);
  }

  logout() {
    this.authfirebase.signOut();
  }

  registrarUser(email: string, password: string, role: string, nombre: string) {
    return this.authfirebase.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        if (result.user) {
          this.saveUserInfo(result.user.uid, email, password, role, nombre);
        }
        return result;
      });
  }

  saveUserInfo(uid: string, password: string, email: string, rol: string, nombre: string) {
    this.firestore.collection('Usuarios').doc(uid).set({
      nombre: nombre,
      email: email,
      password: password,
      uid: uid,
      rol: rol,
    });
  }

  async getUserRole() {
    const user = await this.authfirebase.currentUser;
    if (user) {
      this.firestore.collection('Usuarios').doc(user.uid).get()
        .subscribe((doc) => {
          if (doc.exists) {
            const userData = doc.data() as UserData; // Convertir a tipo UserData
            const userRole = userData.rol; // Obtener el rol del usuario desde Firestore
            this.redirectByRole(userRole);
          } else {
            this.router.navigate(['/login']); // Documento del usuario no encontrado, redirigir a inicio de sesión
          }
        });
    } else {
      this.router.navigate(['/login']); // El usuario no está autenticado, redirigir a la página de inicio de sesión.
    }
  }

  redirectByRole(rol: string) {
    switch (rol) {
      case 'alumno':
        this.router.navigate(['/home']); // Ruta para la página de alumno
        break;
      case 'profesor':
        this.router.navigate(['/pro-home']); // Ruta para la página de profesor
        break;
    }
  }
}
