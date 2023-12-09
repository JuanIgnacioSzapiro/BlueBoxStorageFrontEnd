import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucursalZonaDepositoComponent } from './sucursal-zona-deposito.component';

describe('SucursalZonaDepositoComponent', () => {
  let component: SucursalZonaDepositoComponent;
  let fixture: ComponentFixture<SucursalZonaDepositoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SucursalZonaDepositoComponent]
    });
    fixture = TestBed.createComponent(SucursalZonaDepositoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
