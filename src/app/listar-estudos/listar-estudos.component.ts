import { Component } from '@angular/core';
import { ConteudoEstudosComponent } from '../conteudo-estudos/conteudo-estudos.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-estudos',
  standalone: true,
  imports: [ConteudoEstudosComponent],
  templateUrl: './listar-estudos.component.html',
  styleUrl: './listar-estudos.component.css'
})
export class ListarEstudosComponent {

  constructor(private router: Router) {}
  
  listaDeEstudos: String[] = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular', 'React', 'Vue'];
  nivelEstudante: string = '';


  redirectToConteudos() {
    this.router.navigate(['/conteudos']);
  }
}



