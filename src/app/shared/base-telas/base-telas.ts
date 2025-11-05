import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-base-telas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './base-telas.html',
  styleUrls: ['./base-telas.css']
})
export class BaseTelasComponent {

  @Input() titulo: string = 'Nova Tarefa';

  @Output() onSalvar = new EventEmitter<any>();

  tarefa = {
    nome: '',
    prioridade: 'Alto',
    dataLimite: '',
    categoria: ''
  };

  setCategoria(categoria: string) {
    this.tarefa.categoria = categoria;
  }

  salvar() {
    this.onSalvar.emit(this.tarefa);
  }
}
