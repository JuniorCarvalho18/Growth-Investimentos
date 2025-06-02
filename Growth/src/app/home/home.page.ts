import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'; // Importação do HttpClient

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false, 
})
export class HomePage implements OnInit {
  isModalOpen = false; // Controla o estado do modal
  isNotificationsModalOpen = false; // Controla o estado do modal de notificações
  userName: string = ''; // Variável para armazenar o nome do usuário

  constructor(private rota: Router, private http: HttpClient) {}

  ngOnInit() {
  }

  openAddProjectModal() {
    this.isModalOpen = true; // Abre o modal
  }

  closeModal() {
    this.isModalOpen = false; // Fecha o modal
  }

  openNotificationsModal() {
    this.isNotificationsModalOpen = true; // Abre o modal de notificações
  }

  closeNotificationsModal() {
    this.isNotificationsModalOpen = false; // Fecha o modal de notificações
  }

}
