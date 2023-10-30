import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private navCtrl: NavController,
              private auth: AuthService) {}

  openUserProfile() {
    // Metodo para navegar a la futura pagina de perfil de usuario. 
    this.navCtrl.navigateForward('/perfil-usuario');
  }

  logout() {
    this.auth.logout();
    this.navCtrl.navigateRoot('/login');
      console.log('logout exitoso');
  }
}
