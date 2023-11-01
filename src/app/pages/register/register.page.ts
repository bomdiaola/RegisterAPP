import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firebase.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage {
  acceptTerms: boolean = false;

  nombre: string = '';
  email: string = '';
  password: string = '';
  rolSeleccionado: string = 'alumno'; // Valor predeterminado



  constructor(private auth: AuthService,
    private firestore: FirestoreService,
    private authService: AuthService,
    private alertCtrl: AlertController,
    private router: Router) { }

  async registrarUser(email: string, password: string) {
    try {
      const result = await this.authService.registrarUser(email, password, this.rolSeleccionado, this.nombre);
      if (result.user) {
        await this.authService.saveUserInfo(result.user.uid, password, email, this.rolSeleccionado, this.nombre);
        await this.mostrarAlerta('Éxito', 'Usuario registrado exitosamente');
        this.router.navigate(['/login']); 
      } else {
        await this.mostrarAlerta('Error', 'Error: usuario es nulo');
      }
    } catch (error: any) {
      if (error instanceof Error) {
        await this.mostrarAlerta('Error', 'Error al registrar usuario: ' + error.message);
      } else {
        await this.mostrarAlerta('Error', 'Error al registrar usuario');
      }
    }
  }

  async mostrarAlerta(titulo: string, mensaje: string) {
    const alert = await this.alertCtrl.create({
      header: titulo,
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }
}



