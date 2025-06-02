import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { AddprojPageModule } from '../addproj/addproj.module'; // Importação do módulo AddprojPage

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    AddprojPageModule, // Importação do módulo
  ],
  declarations: [HomePage], // Apenas HomePage deve ser declarado aqui
})
export class HomePageModule {}
