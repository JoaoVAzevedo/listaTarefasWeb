import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITarefa, createITarefa } from '../../models/tarefa.model';
import { TarefaService } from '../../services/tarefa';
import { BaseTelasComponent } from '../../shared/base-telas/base-telas';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tarefa-atualiza',
  template: `
    <app-base-telas
      [titulo]="'Atualizar Tarefa'"
      [tarefa]="tarefa"
      [textoBotao]="'Atualizar'"
      [classeBotao]="'btn btn-warning'"
      (onSalvar)="atualizarTarefa($event)">
    </app-base-telas>
  `,
  standalone: true,
  imports: [BaseTelasComponent, FormsModule],
  styleUrls: ['./tarefa-atualiza.css']
})
export class TarefaAtualizaComponent implements OnInit {
  tarefa: ITarefa = createITarefa();

  constructor(
    private route: ActivatedRoute,
    private tarefaService: TarefaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const encontrada = this.tarefaService.buscarPorId(id);
      if (encontrada) {
        this.tarefa = { ...encontrada };
      } else {
        alert('Tarefa não encontrada.');
        this.router.navigate(['/home']);
      }
    }
  }

  atualizarTarefa(tarefa: ITarefa): void {
    if (!tarefa.nome || !tarefa.data || !tarefa.prioridade || !tarefa.categoria) {
      alert('Todos os campos devem estar preenchidos.');
      return;
    }

    this.tarefaService.editarTarefa(tarefa);
    alert('Tarefa atualizada com sucesso!');
    this.router.navigate(['/home']);
  }
}
