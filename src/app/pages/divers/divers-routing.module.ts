import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiversPage } from './divers.page';

const routes: Routes = [
  {
    path: '',
    component: DiversPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiversPageRoutingModule {}
