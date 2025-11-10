import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ITarefa, createITarefa } from '../../models/tarefa.model';
import { TarefaService } from '../../services/tarefa';
import { BaseTelasComponent } from '../../shared/base-telas/base-telas';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tarefa-nova',

  template: `
    <app-base-telas
      [titulo]="'Nova Tarefa'"
      [tarefa]="tarefa"
      [textoBotao]="'Salvar'"
      [classeBotao]="'btn btn-primary'"
      (onSalvar)="salvarTarefa($event)">
    </app-base-telas>
  `,
  standalone: true,
  imports: [BaseTelasComponent, FormsModule]
})
export class TarefaNovaComponent {
  tarefa: ITarefa = createITarefa();

  constructor(private tarefaService: TarefaService, private router: Router) {}

  salvarTarefa(tarefa: ITarefa) {
    if (!tarefa.nome || !tarefa.data || !tarefa.prioridade || !tarefa.categoria) {
      alert('Todos os campos devem estar preenchidos.');
      return;
    }

    this.tarefaService.cadastrarTarefa(tarefa);

    alert('Cadastro realizado com sucesso!');
    this.router.navigate(['/home']);
  }

  private gerarId(): string {
    return Math.random().toString(36).substring(2, 9);
  }
}
