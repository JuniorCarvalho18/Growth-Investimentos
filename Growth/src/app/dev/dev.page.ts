import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dev',
  templateUrl: './dev.page.html',
  styleUrls: ['./dev.page.scss'],
  standalone:false,
})
export class DevPage implements OnInit {

  constructor(private rota:Router) { }

  ngOnInit() {
  }
  add1(){
    this.rota.navigate(['/usuarios']);
  }
}
