import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarListaComponent } from './visualizar-lista.component';

describe('VisualizarListaComponent', () => {
  let component: VisualizarListaComponent;
  let fixture: ComponentFixture<VisualizarListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualizarListaComponent]
    });
    fixture = TestBed.createComponent(VisualizarListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
