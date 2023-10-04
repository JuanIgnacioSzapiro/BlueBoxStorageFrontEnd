import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMisDepositosComponent } from './listar-mis-depositos.component';

describe('ListarMisDepositosComponent', () => {
  let component: ListarMisDepositosComponent;
  let fixture: ComponentFixture<ListarMisDepositosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarMisDepositosComponent]
    });
    fixture = TestBed.createComponent(ListarMisDepositosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
