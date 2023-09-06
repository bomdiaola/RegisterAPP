import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: 'splash.page.html',
  styleUrls: ['splash.page.scss'],
})
export class SplashPage {

  constructor(private router: Router) {}

  ionViewDidEnter () { // ionViewDidEnter() es un método de ciclo de vida de Ionic que se ejecuta cuando la página se carga por completo.
    setTimeout(() => {
      // Navegar a la página de inicio de sesión después de 3 segundos
      this.router.navigateByUrl('/login'); 
    }, 3000); 
  }
}
