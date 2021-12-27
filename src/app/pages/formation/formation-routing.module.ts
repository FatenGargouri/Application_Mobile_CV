import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormationPage } from './formation.page';

const routes: Routes = [
  {
    path: '',
    component: FormationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormationPageRoutingModule {}
