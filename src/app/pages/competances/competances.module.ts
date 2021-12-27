import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompetancesPageRoutingModule } from './competances-routing.module';

import { CompetancesPage } from './competances.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompetancesPageRoutingModule
  ],
  declarations: [CompetancesPage]
})
export class CompetancesPageModule {}
