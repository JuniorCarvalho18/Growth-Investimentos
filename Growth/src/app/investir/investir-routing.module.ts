import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvestirPage } from './investir.page';

const routes: Routes = [
  {
    path: '',
    component: InvestirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvestirPageRoutingModule {}