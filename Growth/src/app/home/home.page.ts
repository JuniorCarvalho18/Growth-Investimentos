import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false, 
})
export class HomePage implements OnInit {
  isModalOpen = false; // Controla o estado do modal

  constructor(private rota: Router) {}

  ngOnInit() {
    // Inicializações necessárias
  }

  openAddProjectModal() {
    this.isModalOpen = true; // Abre o modal
  }

  closeModal() {
    this.isModalOpen = false; // Fecha o modal
  }
}
