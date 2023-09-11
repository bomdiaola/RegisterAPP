import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecoverypassPage } from './recoverypass.page';

describe('RecoverypassPage', () => {
  let component: RecoverypassPage;
  let fixture: ComponentFixture<RecoverypassPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecoverypassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
