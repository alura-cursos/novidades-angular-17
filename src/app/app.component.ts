import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ListarEstudosComponent } from './listar-estudos/listar-estudos.component';
import { ConteudoEstudosComponent } from './conteudo-estudos/conteudo-estudos.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ListarEstudosComponent, ConteudoEstudosComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'componentes-v17';
}
