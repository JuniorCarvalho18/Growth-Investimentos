import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  standalone: false,
})
export class FolderPage implements OnInit {

  constructor(private rota:Router) {}

  ngOnInit() {
   
  }
  add(){
    this.rota.navigate(['/cadastro']);
  }
}
