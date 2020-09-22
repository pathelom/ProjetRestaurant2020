import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddplatPage } from './addplat.page';

const routes: Routes = [
  {
    path: '',
    component: AddplatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddplatPageRoutingModule {}
