import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NotificacoesPage } from './notificacoes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [NotificacoesPage],
  exports: [NotificacoesPage], 
})
export class NotificacoesPageModule {}
