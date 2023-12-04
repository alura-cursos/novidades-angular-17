import { Routes } from '@angular/router';
import { ListarEstudosComponent } from './listar-estudos/listar-estudos.component';
import { ConteudoEstudosComponent } from './conteudo-estudos/conteudo-estudos.component';

export const routes: Routes = [
  { path: '', redirectTo: "listarEstudos",  pathMatch: "full"  },
  { path: 'listarEstudos', component: ListarEstudosComponent},
  { path: 'conteudos', component: ConteudoEstudosComponent },
];
