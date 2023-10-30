import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
//import { InteractionService } from 'src/app/services/interaction.service';

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

  async login(){
    console.log('credenciales -', this.credenciales);
    if (this.credenciales.email && this.credenciales.password) {
      const res = await this.auth.login(this.credenciales.email, this.credenciales.password);
      if (res){
        console.log('login exitoso');
        this.router.navigate(['/home']);
      }
    } else {
      console.log('Ingrese email y contraseña');
      
    }
  }

  ngOnInit() {
  }

  // IrHomeAlumno() funcion que permite redireccionar a la pagina home del alumno 
  // ingresando las credenciales pre-definidas acá
  loginAlumno(){
    console.log('credenciales', this.credenciales);
  }
  // IrHomeProfesor() funcion que permite redireccionar a la pagina home del profesor 
  // ingresando las credenciales pre-definidas acá
  loginProfesor(){

       this.router.navigate(['/pro-home']);
    }

  }


