import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { AddprojPageModule } from '../addproj/addproj.module'; 
import { NotificacoesPageModule } from '../notificacoes/notificacoes.module'; 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    AddprojPageModule,
    NotificacoesPageModule,
  ],
  declarations: [HomePage,], 
})
export class HomePageModule {}
