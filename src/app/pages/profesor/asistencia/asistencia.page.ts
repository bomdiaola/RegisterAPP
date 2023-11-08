import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {
  listaAlumnos = [
    { nombre: 'Sebastian Piñera', status: 'Presente', fecha: '16 Sep, 2023', id: '36568-235', expanded: false },
    { nombre: 'Gabriel Boric', status: 'Presente', fecha: '16 Sep, 2023', id: '36568-235', expanded: false },
    { nombre: 'Salvador Allende', status: 'Ausente', fecha: '16 Sep, 2023', id: '36568-235', expanded: false },
    { nombre: 'Barack Obama', status: 'Presente', fecha: '16 Sep, 2023', id: '36568-235', expanded: false },
    { nombre: 'Vladímir Putin', status: 'Presente', fecha: '16 Sep, 2023', id: '36568-235', expanded: false },
    { nombre: 'Papa Francisco', status: 'Presente', fecha: '16 Sep, 2023', id: '36568-235', expanded: false }
  ];

  constructor(
    private auth: AuthService,
    private alertCtrl: AlertController,
    private navCtrl: NavController) { }

  ngOnInit() {
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

