import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asistencia-alumno',
  templateUrl: './asistencia-alumno.page.html',
  styleUrls: ['./asistencia-alumno.page.scss'],
})
export class AsistenciaAlumnoPage implements OnInit {
  
  showInfo: boolean = false;

  toggleCard() {
    this.showInfo = !this.showInfo;
  }

  
  constructor() { }

  ngOnInit() {
  }

}
