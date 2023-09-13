import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroAlumnoPage } from './registro-alumno.page';

describe('RegistroAlumnoPage', () => {
  let component: RegistroAlumnoPage;
  let fixture: ComponentFixture<RegistroAlumnoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistroAlumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
