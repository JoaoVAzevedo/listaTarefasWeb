import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TarefaService } from '../../services/tarefa';
import { CommonModule } from '@angular/common';
import { ITarefa } from '../../models/tarefa.model';
import { HeaderComponent } from '../../shared/header/header';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  tarefas: ITarefa[] = [];
  titulo = `Tarefas - ${new Date().toLocaleDateString('pt-BR', {
    day: '2-digit', month: 'long', year: 'numeric'
  })}`;

  constructor(private router: Router, private tarefaService: TarefaService) {
    this.tarefas = this.tarefaService.listarTarefas();
  }

  editarTarefa(id: string) {
    this.router.navigate(['/tarefaAtualiza', id]);
  }

  deletarTarefa(id: string) {
    this.tarefaService.excluirTarefa(id);
    this.tarefas = this.tarefaService.listarTarefas();
  }

  adicionarTarefa() {
    this.router.navigate(['/novaTarefa']);
  }
}
