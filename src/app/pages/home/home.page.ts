import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    private navCtrl: NavController,
    private auth: AuthService,
    private alertCtrl: AlertController,
    private router: Router,
    private firestore: AngularFirestore,
    private afAuth: AngularFireAuth
  ) {}

  openUserProfile() {
    // Método para navegar a la futura página de perfil de usuario.
    this.navCtrl.navigateForward('/perfil-usuario');
  }

  async logout() {
    const alert = await this.alertCtrl.create({
      header: 'Confirmar logout',
      message: '¿Estás seguro de que deseas salir de la sesión?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'alert-button-cancel',
        },
        {
          text: 'Sí',
          cssClass: 'alert-button-confirm',
          handler: () => {
            this.performLogout();
          },
        },
      ],
    });

    await alert.present();
  }

  performLogout() {
    this.auth.logout();
    this.navCtrl.navigateRoot('/login');
    console.log('logout exitoso');
  }

  async iniciarEscaneo() {
    try {
      // Obtener la ubicación actual
      const ubicacionActual = await this.obtenerUbicacionActual();

      // Definir el perímetro permitido
      const ubicacionPermitida = { lat: -33.62555648266834, lng: -70.59492873206821 }; // coordenadas para poner del duoc -33.59855167900821, -70.57906197139616
      
      if (this.estaDentroDePerimetro(ubicacionActual, ubicacionPermitida)) {
        const result = await BarcodeScanner.startScan();

        if (result && result.hasContent) {
          // Detener el escaneo
          BarcodeScanner.showBackground();
          BarcodeScanner.stopScan();

          // Acceder a los datos del código QR escaneado
          const qrData = result.content;

          // Obtener datos del profesor (puedes obtener estos datos de tu sistema de autenticación)
          let user = await this.afAuth.currentUser;
          const idProfesor = user?.uid;
          const nombreProfesor = 'Nombre del profesor'; // Puedes obtener esto de tu sistema

          // Crear documento en la colección 'registro_asistencias'
          const fechaHoraGeneracion = new Date().toISOString();
          const registroAsistenciaRef = this.firestore
            .collection('registro_asistencias')
            .doc();

          // Datos del documento
          const registroAsistenciaData = {
            id_profesor: idProfesor,
            nombre_profesor: nombreProfesor,
            asignatura: 'Asignatura',
            fecha_hora_generacion: fechaHoraGeneracion,
            datos_escaneo: qrData, // Agregar los datos del escaneo al documento
          };

          await registroAsistenciaRef.set(registroAsistenciaData);

          // Crear subcolección 'asistencias_alumnos' dentro del documento 'registro_asistencias'
          const asistenciasAlumnosRef = registroAsistenciaRef.collection(
            'asistencias_alumnos'
          );

          // Obtener datos del usuario con rol "alumno" (puedes ajustar esto según tu sistema de autenticación)
          const datosAlumno = {
            nombre: 'Nombre del alumno',
            asignatura: 'Asignatura',
            estado: 'ausente', // Puedes inicializar el estado como "ausente"
          };

          // Añadir datos del alumno a la subcolección 'asistencias_alumnos'
          await asistenciasAlumnosRef.add(datosAlumno);

          // Navegar a la página asistencia-alumno.page y pasar el ID del documento como parámetro
          this.router.navigate(['/asistencia-alumno']);
        }
      } else {
        // Mostrar mensaje de ubicación no permitida
        console.log('Fuera del perímetro permitido');
      }
    } catch (error) {
      console.error('Error al escanear:', error);
      // Aquí puedes manejar cualquier error que surja durante el escaneo
    }
  }

  async obtenerUbicacionActual() {
    const coordinates = await Geolocation.getCurrentPosition();
    return coordinates.coords; // Retorna las coordenadas (latitud, longitud, etc.)
  }

  estaDentroDePerimetro(
    actual: { latitude: number; longitude: number },
    permitida: { lat: number; lng: number }
  ): boolean {
    const radioPermitido = 0.09; // Ajusta el radio permitido según tus necesidades

    const distancia = Math.sqrt(
      Math.pow(actual.latitude - permitida.lat, 2) +
        Math.pow(actual.longitude - permitida.lng, 2)
    );

    return distancia <= radioPermitido;
  }
}
