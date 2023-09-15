import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private navCtrl: NavController) {}

  openUserProfile() {
    // Metodo para navegar a la futura pagina de perfil de usuario. 
    this.navCtrl.navigateForward('/perfil-usuario');
  }
}
