import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {



  constructor(private router:Router,
              private auth: AuthService,
              ) { }

  credenciales = {
    email:null ,
    password:null
  }

  async login() {
    console.log('credenciales -', this.credenciales);
    if (this.credenciales.email && this.credenciales.password) {
      const res = await this.auth.login(this.credenciales.email, this.credenciales.password);

      if (res) {
        console.log('login exitoso');
        // Llamar a la función en AuthService para obtener el rol del usuario y redirigir en consecuencia
        this.auth.getUserRole();
      }
    } else {
      console.log('Ingrese email y contraseña');
    }
  }

  ngOnInit() {
  }

  }


