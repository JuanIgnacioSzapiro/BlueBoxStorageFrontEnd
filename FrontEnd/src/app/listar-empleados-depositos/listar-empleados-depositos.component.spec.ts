import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEmpleadosDepositosComponent } from './listar-empleados-depositos.component';

describe('ListarEmpleadosDepositosComponent', () => {
  let component: ListarEmpleadosDepositosComponent;
  let fixture: ComponentFixture<ListarEmpleadosDepositosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarEmpleadosDepositosComponent]
    });
    fixture = TestBed.createComponent(ListarEmpleadosDepositosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
