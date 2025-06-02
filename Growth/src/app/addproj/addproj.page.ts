import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproj',
  templateUrl: './addproj.page.html',
  styleUrls: ['./addproj.page.scss'],
  standalone: false, 
})
export class AddprojPage implements OnInit {

  constructor(private rota: Router) { }

  ngOnInit() {
  }

}
