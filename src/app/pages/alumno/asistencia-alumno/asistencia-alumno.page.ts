import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asistencia-alumno',
  templateUrl: './asistencia-alumno.page.html',
  styleUrls: ['./asistencia-alumno.page.scss'],
})

export class AsistenciaAlumnoPage implements OnInit {
  asignaturas = [
    {
      nombre: 'Arquitectura',
      expandida: false,
      dias: [
        { fecha: '15-02-2023', presente: true },
        { fecha: '12-06-2023', presente: false },
        { fecha: '15-09-2023', presente: false },
      ]
    },
    {
      nombre: 'Calidad de software',
      expandida: false,
      dias: [
        { fecha: '15-02-2023', presente: true },
        { fecha: '12-06-2023', presente: false },
        { fecha: '15-09-2023', presente: false },
      ]
    },
    {
      nombre: 'Ética para el trabajo',
      expandida: false,
      dias: [
        { fecha: '15-02-2023', presente: true },
        { fecha: '12-06-2023', presente: false },
        { fecha: '15-09-2023', presente: false },
      ]
    },
    {
      nombre: 'Inglés Intermedio',
      expandida: false,
      dias: [
        { fecha: '15-02-2023', presente: true },
        { fecha: '12-06-2023', presente: false },
        { fecha: '15-09-2023', presente: false },
      ]
    },
    {
      nombre: 'Matematica Aplicada',
      expandida: false,
      dias: [
        { fecha: '15-02-2023', presente: true },
        { fecha: '12-06-2023', presente: false },
        { fecha: '15-09-2023', presente: false },
      ]
    },
    {
      nombre: 'Programacion de App Moviles',
      expandida: false,
      dias: [
        { fecha: '15-02-2023', presente: true },
        { fecha: '12-06-2023', presente: false },
        { fecha: '15-09-2023', presente: false },
      ]
    },
  ];

  toggleAsignatura(asignatura: any) {
    asignatura.expandida = !asignatura.expandida;
  }


  constructor() { }

  ngOnInit() {
  }
}