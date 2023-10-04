import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarDepositosComponent } from './listar-depositos.component';

describe('ListarDepositosComponent', () => {
  let component: ListarDepositosComponent;
  let fixture: ComponentFixture<ListarDepositosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarDepositosComponent]
    });
    fixture = TestBed.createComponent(ListarDepositosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
