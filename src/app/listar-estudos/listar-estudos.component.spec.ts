import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEstudosComponent } from './listar-estudos.component';

describe('ListarEstudosComponent', () => {
  let component: ListarEstudosComponent;
  let fixture: ComponentFixture<ListarEstudosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarEstudosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarEstudosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
