import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recoverypass',
  templateUrl: './recoverypass.page.html',
  styleUrls: ['./recoverypass.page.scss'],
})
export class RecoverypassPage implements OnInit {

  recuperarUsuarioForm: FormGroup;

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  loadingController: any;
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Hellooo',
      duration: 2000,
      spinner: 'bubbles'
    });
    await loading.present();
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private afAuth: AngularFireAuth,
    private toastCtrl: ToastController
  ) {
    this.recuperarUsuarioForm = fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit() { }

  recuperar() {
    const email = this.recuperarUsuarioForm.value.email;

    this.afAuth.sendPasswordResetEmail(email)
      .then(() => {
        this.presentToast('Se ha enviado un correo para restablecer la contraseña');
        this.router.navigate(['/login']);
      })
      .catch(error => {
        this.presentToast(error.message); // Manejo del error específico de Firebase
      });
  }
}
