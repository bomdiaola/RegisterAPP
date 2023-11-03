import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {
  BarcodeScanner,
  BarcodeFormat,
  LensFacing,
} from '@capacitor-mlkit/barcode-scanning';
import { lastValueFrom } from 'rxjs';

interface DatosAlumno {
  nombre: string;
  asignatura: string;
  rol: string;
  // Otros campos relevantes
}

@Component({
  selector: 'app-registro-alumno',
  templateUrl: './registro-alumno.page.html',
  styleUrls: ['./registro-alumno.page.scss'],
})
export class RegistroAlumnoPage implements OnInit, OnDestroy {
  private barcodeScannerListener: any;

  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore) { }

  ngOnInit() {
    this.escanearCodigoQR();
  }

  async escanearCodigoQR() {
    this.afAuth.onAuthStateChanged(async (user) => {
      if (user) {
        const { supported } = await BarcodeScanner.isSupported();
        if (supported) {
          this.barcodeScannerListener = await BarcodeScanner.addListener(
            'barcodeScanned',
            async (result: any) => {
              console.log(result.barcode);
              await BarcodeScanner.stopScan();

              const datosQR = {
                id_profesor: "ID_del_profesor",
                nombre_profesor: "Nombre_del_profesor",
                asignatura: "Nombre_asignatura",
                fecha_hora_generacion: new Date().toString()
              };

              await this.registrarAsistencia(datosQR);
            }
          );

          await BarcodeScanner.startScan();
        } else {
          console.log('El escaneo de códigos de barras no está soportado en este dispositivo.');
        }
      }
    });
  }

  ngOnDestroy() {
    if (this.barcodeScannerListener) {
      this.barcodeScannerListener.remove();
    }
  }

  async registrarAsistencia(datosQR: any) {
    const user = await this.afAuth.currentUser;
    if (user) {
      const alumnoUid = user.uid;
      const docAlumno = await lastValueFrom(
        this.firestore.collection('Usuarios').doc(alumnoUid).get()
      );
      if (docAlumno.exists) {
        const datosAlumno = docAlumno.data() as DatosAlumno;

        await this.firestore.collection('registro_asistencias').add({
          id_profesor: datosQR.id_profesor,
          nombre_profesor: datosQR.nombre_profesor,
          asignatura: datosQR.asignatura,
          fecha_hora_generacion: datosQR.fecha_hora_generacion,
          asistencias: {
            id_alumno: alumnoUid,
            nombre_alumno: datosAlumno.nombre,
            estado_asistencia: "presente"
          }
        })
        .then((docRef) => {
          console.log("Registro de asistencia creado con ID: ", docRef.id);
        })
        .catch((error) => {
          console.error("Error al agregar registro de asistencia: ", error);
        });
      } else {
        console.log("Datos de usuario no encontrados");
      }
    }
  }
}