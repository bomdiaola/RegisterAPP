import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private navCtrl: NavController,
    private auth: AuthService,
    private alertCtrl: AlertController) { }

  openUserProfile() {
    // Metodo para navegar a la futura pagina de perfil de usuario. 
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



}
