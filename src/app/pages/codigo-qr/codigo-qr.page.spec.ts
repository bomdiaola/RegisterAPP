import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CodigoQrPage } from './codigo-qr.page';

describe('CodigoQrPage', () => {
  let component: CodigoQrPage;
  let fixture: ComponentFixture<CodigoQrPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CodigoQrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
