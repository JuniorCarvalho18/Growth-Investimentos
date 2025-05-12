import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-saldo',
  templateUrl: './saldo.page.html',
  styleUrls: ['./saldo.page.scss'],
  standalone: false
})
export class SaldoPage implements OnInit {

  constructor(private rota:Router) { }

  ngOnInit() {
  }

}
