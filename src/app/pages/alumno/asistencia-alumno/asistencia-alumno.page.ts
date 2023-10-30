import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firebase.service';
@Component({
  selector: 'app-asistencia-alumno',
  templateUrl: './asistencia-alumno.page.html',
  styleUrls: ['./asistencia-alumno.page.scss'],
})

export class AsistenciaAlumnoPage implements OnInit {
  asignaturas: any[] = [];

  constructor(private firestore: FirestoreService) {}

  ngOnInit() {
    this.getAsignaturas();
  }

  getAsignaturas() {
    this.firestore.getAsignaturas().subscribe((asignaturasFromFirebase: any[]) => {
      this.asignaturas = asignaturasFromFirebase;
    });
  }
  getAsistencia() {
    this.firestore.getAsistencia().subscribe((asignaturasFromFirebase: any[]) => {
      this.asignaturas = asignaturasFromFirebase;
    });
  }
  
  toggleAsignatura(asignatura: any) {
    asignatura.expandida = !asignatura.expandida;
  }
}