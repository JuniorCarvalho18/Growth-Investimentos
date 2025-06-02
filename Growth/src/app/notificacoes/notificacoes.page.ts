import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-notificacoes',
  templateUrl: './notificacoes.page.html',
  styleUrls: ['./notificacoes.page.scss'],
  standalone: false,
})
export class NotificacoesPage implements OnInit {

  constructor(private rota: Router) { }

  ngOnInit() {
  }

}
