import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../shared/header/header';

interface Tarefa {
  id: number;
  nome: string;
  prioridade: 'BAIXO' | 'MÉDIO' | 'ALTO';
  data: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  tarefas: Tarefa[] = [];
  titulo = `Tarefas - ${new Date().toLocaleDateString('en-GB', {
    day: '2-digit', month: 'long', year: 'numeric'
  })}`;

  constructor(private router: Router) {
    const salvas = localStorage.getItem('tarefas');
    this.tarefas = salvas ? JSON.parse(salvas) : [];
  }

  editarTarefa(id: number) {
    this.router.navigate(['/tarefa-editar', id]);
  }

  deletarTarefa(id: number) {
    this.tarefas = this.tarefas.filter(t => t.id !== id);
    localStorage.setItem('tarefas', JSON.stringify(this.tarefas));
  }

  adicionarTarefa() {
    this.router.navigate(['/tarefa-nova']);
  }
}
