import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.page.html',
  styleUrls: ['./marketplace.page.scss'],
  standalone: false,
})
export class MarketplacePage implements OnInit {
  isNotificationsModalOpen = false; // Controla o estado do modal de notificações

  constructor(private rota: Router) {}

  ngOnInit() {}

  openNotificationsModal() {
    this.isNotificationsModalOpen = true; // Abre o modal de notificações
  }

  closeNotificationsModal() {
    this.isNotificationsModalOpen = false; // Fecha o modal de notificações
  }
}
