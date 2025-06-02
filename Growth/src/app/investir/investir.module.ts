import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvestirPageRoutingModule } from './investir-routing.module';

import { InvestirPage } from './investir.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvestirPageRoutingModule
  ],
  declarations: [InvestirPage]
})
export class InvestirPageModule {}
