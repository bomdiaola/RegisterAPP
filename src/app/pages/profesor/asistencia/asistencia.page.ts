import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NavController, AlertController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FirestoreService } from 'src/app/services/firebase.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {
  usuarios: any[] = [];
  constructor(
    private auth: AuthService,
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private firestore: FirestoreService,
    private Firestore: AngularFirestore) { }

  ngOnInit() {
  //   this.getUsuarios();
  }
  
  // getusuarios(): Observable<any[]> {
  //   return this.firestore.getUsuarios();
    
  // }


//   //getUsuarios() {
//       this.firestore.getUsuarios().subscribe((usuariosFromFirebase: any[]) => {
//       this.usuarios = usuariosFromFirebase;
//     });
    
//   }
// //
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

