import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: false, // Define como false para não ser um componente independente
})
export class ProfilePage implements OnInit {

  constructor(private rota: Router) { }

  ngOnInit() {
  }

}
