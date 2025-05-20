import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfigaracaoPageRoutingModule } from './configaracao-routing.module';

import { ConfigaracaoPage } from './configaracao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfigaracaoPageRoutingModule
  ],
  declarations: [ConfigaracaoPage]
})
export class ConfigaracaoPageModule {}
