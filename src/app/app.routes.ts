import { HomeComponent } from './pages/home/home';
import { Routes } from '@angular/router';
import { TarefaNovaComponent } from './pages/tarefa-nova/tarefa-nova';
import { TarefaAtualizaComponent } from './pages/tarefa-atualiza/tarefa-atualiza';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'novaTarefa', component: TarefaNovaComponent},
  { path: 'tarefaAtualiza/:id', loadComponent: () => import('./pages/tarefa-atualiza/tarefa-atualiza').then(m => m.TarefaAtualizaComponent) }
];
