import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-investir',
  templateUrl: './investir.page.html',
  styleUrls: ['./investir.page.scss'],
  standalone: false,
})
export class InvestirPage implements OnInit {

  constructor(private rota: Router) { }

  ngOnInit() {
  }

}
