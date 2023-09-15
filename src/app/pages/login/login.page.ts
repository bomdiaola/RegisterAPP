import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email:string='';
  password:string='';

  constructor(private router:Router) { }

  ngOnInit() {
  }

  // IrHomeAlumno() funcion que permite redireccionar a la pagina home del alumno 
  // ingresando las credenciales pre-definidas acá
  IrHomeAlumno(){
    if (this.email=='re.parker@duocuc.cl' && this.password=='1234'){

       this.router.navigate(['/home']);
    }
  }
  // IrHomeProfesor() funcion que permite redireccionar a la pagina home del profesor 
  // ingresando las credenciales pre-definidas acá
  IrHomeProfesor(){
    if (this.email=='re.parker@profesor.cl' && this.password=='1234'){

       this.router.navigate(['/pro-home']);
    }

  }

}
