import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.page.html',
  styleUrls: ['./historico.page.scss'],
  standalone: false,
})
export class HistoricoPage implements OnInit {
  isNotificationsModalOpen = false; // Controla o estado do modal de notificações

  constructor(private rota:Router) { }

  ngOnInit() {
  }

  openNotificationsModal() {
    this.isNotificationsModalOpen = true; // Abre o modal de notificações
  }

  closeNotificationsModal() {
    this.isNotificationsModalOpen = false; // Fecha o modal de notificações
  }
}
