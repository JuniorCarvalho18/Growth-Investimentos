import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfigaracaoPage } from './configaracao.page';

const routes: Routes = [
  {
    path: '',
    component: ConfigaracaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigaracaoPageRoutingModule {}
