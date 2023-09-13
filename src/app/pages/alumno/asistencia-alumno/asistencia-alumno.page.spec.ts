import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsistenciaAlumnoPage } from './asistencia-alumno.page';

describe('AsistenciaAlumnoPage', () => {
  let component: AsistenciaAlumnoPage;
  let fixture: ComponentFixture<AsistenciaAlumnoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AsistenciaAlumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
