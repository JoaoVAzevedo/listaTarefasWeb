import { Injectable } from '@angular/core';
import { ITarefa } from '../models/tarefa.model'; // Importação da Interface

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  // Estrutura de dados para armazenar as tarefas
  private tarefas: ITarefa[] = [];

  constructor() { }

  // 1. Método de Listagem
  listarTarefas(): ITarefa[] {
    return this.tarefas;
  }

  // 2. Método de Cadastro
  cadastrarTarefa(tarefa: ITarefa): void {
    // Lógica de cadastro (ex: atribuir um novo id e adicionar ao array)
  }

  // 3. Método de Edição
  editarTarefa(tarefa: ITarefa): void {
    // Lógica de edição (ex: encontrar a tarefa pelo id e atualizar)
  }

  // 4. Método de Exclusão
  excluirTarefa(id: string): void {
    // Lógica de exclusão (ex: remover a tarefa do array pelo id)
  }
}
