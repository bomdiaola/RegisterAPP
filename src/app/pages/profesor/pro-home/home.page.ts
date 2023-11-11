import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Animation, AnimationController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { NavController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  nombreProfesor: string = '';
  constructor(
    private aniCtrl: AnimationController, 
    private auth: AuthService,
    private alertCtrl: AlertController, 
    private navCtrl: NavController,
    private router: Router,
    private firestore: AngularFirestore,
    private afAuth: AngularFireAuth)
    { }

  ngOnInit() {
  }
  
  
  redirectToHome() {
    this.router.navigateByUrl('/pro-home'); 
  }
  redirectToAsistencia() {
    this.router.navigateByUrl('/pro-asistencia'); 
  }

  redirectToCodigoQR() {
    this.router.navigateByUrl('/codigo-qr'); 
  }

  asistenciapage() {
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
}
