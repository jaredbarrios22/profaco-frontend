import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoformComponent } from './pedidoform.component';

describe('PedidoformComponent', () => {
  let component: PedidoformComponent;
  let fixture: ComponentFixture<PedidoformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidoformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidoformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
