import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompetancesPage } from './competances.page';

const routes: Routes = [
  {
    path: '',
    component: CompetancesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompetancesPageRoutingModule {}
