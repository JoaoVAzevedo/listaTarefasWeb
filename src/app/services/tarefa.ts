import { Injectable } from '@angular/core';
import { ITarefa } from '../models/tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  private tarefas: ITarefa[] = [];

  constructor() {
    const salvas = localStorage.getItem('tarefas');
    this.tarefas = salvas ? JSON.parse(salvas) : [];
  }

  // 1. Listar todas as tarefas
  listarTarefas(): ITarefa[] {
    return this.tarefas;
  }

  // 2. Cadastrar nova tarefa
 cadastrarTarefa(tarefa: ITarefa): void {
    tarefa.id = Date.now().toString();
    this.tarefas.push(tarefa);
    localStorage.setItem('tarefas', JSON.stringify(this.tarefas));
  }

  buscarPorId(id: string): ITarefa | undefined {
    return this.tarefas.find(t => t.id === id);
  }

  // 3. Editar tarefa existente
  editarTarefa(tarefaAtualizada: ITarefa): void {
    const index = this.tarefas.findIndex(t => t.id === tarefaAtualizada.id);
    if (index !== -1) {
      this.tarefas[index] = tarefaAtualizada;
      localStorage.setItem('tarefas', JSON.stringify(this.tarefas)); // Atualiza no localStorage
    }
  }

  // 4. Excluir tarefa pelo ID
  excluirTarefa(id: string): void {
    this.tarefas = this.tarefas.filter(t => t.id !== id);
    localStorage.setItem('tarefas', JSON.stringify(this.tarefas)); // Atualiza no localStorage
  }
}
