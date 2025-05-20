import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verificacao',
  templateUrl: './verificacao.page.html',
  styleUrls: ['./verificacao.page.scss'],
  standalone: false,
})
export class VerificacaoPage implements OnInit {

  constructor(private rota:Router) { }

  ngOnInit() {
  }

}
