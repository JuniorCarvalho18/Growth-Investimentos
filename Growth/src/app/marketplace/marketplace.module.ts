import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotificacoesPageModule } from '../notificacoes/notificacoes.module'; 
import { IonicModule } from '@ionic/angular';

import { MarketplacePageRoutingModule } from './marketplace-routing.module';

import { MarketplacePage } from './marketplace.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarketplacePageRoutingModule,
    NotificacoesPageModule,
  ],
  declarations: [MarketplacePage]
})
export class MarketplacePageModule {}
