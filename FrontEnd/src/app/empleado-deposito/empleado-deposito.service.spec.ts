import { TestBed } from '@angular/core/testing';

import { EmpleadoDepositoService } from './empleado-deposito.service';

describe('EmpleadoDepositoService', () => {
  let service: EmpleadoDepositoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpleadoDepositoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
