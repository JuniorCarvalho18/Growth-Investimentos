import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configaracao',
  templateUrl: './configaracao.page.html',
  styleUrls: ['./configaracao.page.scss'],
  standalone:false,
})
export class ConfigaracaoPage implements OnInit {

  constructor(private rota:Router) { }

  ngOnInit() {
  }
  add(){
    this.rota.navigate(['/dev']);
  }
}
