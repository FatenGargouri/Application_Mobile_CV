import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StagesPage } from './stages.page';

const routes: Routes = [
  {
    path: '',
    component: StagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StagesPageRoutingModule {}
