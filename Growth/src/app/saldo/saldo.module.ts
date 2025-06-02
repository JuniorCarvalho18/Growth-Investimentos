import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SaldoPageRoutingModule } from './saldo-routing.module';

import { SaldoPage } from './saldo.page';
import { NotificacoesPageModule } from '../notificacoes/notificacoes.module'; 


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaldoPageRoutingModule,
    NotificacoesPageModule
  ],
  declarations: [SaldoPage,], // Declaração do componente

})
export class SaldoPageModule {}
