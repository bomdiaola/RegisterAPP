import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { QRCodeModule } from 'angularx-qrcode';

// Define una interfaz para el objeto userData
interface UserData {
  nombre: string;
  asignatura: string;
  rol: string; // Agrega todos los campos que esperas recibir
  // Añade otros campos si los hay
}

@Component({
  selector: 'app-codigo-qr',
  templateUrl: './codigo-qr.page.html',
  styleUrls: ['./codigo-qr.page.scss'],
})
export class CodigoQrPage implements OnInit {
  public myAngularxQrCode: string = '';
  public isProfessor: boolean = false;

  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore) { }

  ngOnInit() {
    this.afAuth.onAuthStateChanged((user) => { // Comprueba si hay un usuario logueado
      if (user) {
        const profesorUid = user.uid;// Obtiene el uid del usuario logueado

        this.firestore.collection('Usuarios').doc(profesorUid).get().subscribe((doc) => {// Obtiene los datos del usuario logueado
          if (doc.exists) {
            const userData = doc.data() as UserData; // Indica a TypeScript que estos datos son del tipo UserData
            const rol = userData.rol;// Obtiene el rol del usuario logueado

            if (rol === 'profesor') {// Comprueba si el usuario logueado es un profesor
              this.isProfessor = true;

              const qrDataObj = {// Crea un objeto con los datos que se van a codificar en el código QR
                id: profesorUid,
                nombre: userData.nombre,
                asignatura: userData.asignatura,
                fecha_hora: new Date().toString(),
              };

              this.myAngularxQrCode = JSON.stringify(qrDataObj);
            } else {
              console.log('El usuario no es un profesor');
            }
          } else {
            console.log('El usuario no tiene datos en la base de datos');
          }
        });
      }
    });
  }
}