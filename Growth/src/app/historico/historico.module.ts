import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoricoPageRoutingModule } from './historico-routing.module';

import { HistoricoPage } from './historico.page';
import { NotificacoesPageModule } from '../notificacoes/notificacoes.module'; // Importação do módulo NotificacoesPage

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoricoPageRoutingModule,
    NotificacoesPageModule, // Adicionado para usar o modal de notificações
  ],
  declarations: [HistoricoPage],
})
export class HistoricoPageModule {}
