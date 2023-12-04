import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudoEstudosComponent } from './conteudo-estudos.component';

describe('ConteudoEstudosComponent', () => {
  let component: ConteudoEstudosComponent;
  let fixture: ComponentFixture<ConteudoEstudosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConteudoEstudosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConteudoEstudosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
