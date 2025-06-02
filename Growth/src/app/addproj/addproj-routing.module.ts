import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddprojPage } from './addproj.page';

const routes: Routes = [
  {
    path: '',
    component: AddprojPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddprojPageRoutingModule {}
