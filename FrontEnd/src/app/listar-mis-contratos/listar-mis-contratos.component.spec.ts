import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMisContratosComponent } from './listar-mis-contratos.component';

describe('ListarMisContratosComponent', () => {
  let component: ListarMisContratosComponent;
  let fixture: ComponentFixture<ListarMisContratosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarMisContratosComponent]
    });
    fixture = TestBed.createComponent(ListarMisContratosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
