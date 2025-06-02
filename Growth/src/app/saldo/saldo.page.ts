import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-saldo',
  templateUrl: './saldo.page.html',
  styleUrls: ['./saldo.page.scss'],
  standalone: false,
})
export class SaldoPage implements OnInit {
  isNotificationsModalOpen = false; // Controla o estado do modal de notificações

  
  constructor() { }

  ngOnInit() {
  }
  
  openNotificationsModal() {
    this.isNotificationsModalOpen = true; // Abre o modal de notificações
  }

  closeNotificationsModal() {
    this.isNotificationsModalOpen = false; // Fecha o modal de notificações
  }
}
