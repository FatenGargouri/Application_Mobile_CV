import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiversPageRoutingModule } from './divers-routing.module';

import { DiversPage } from './divers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiversPageRoutingModule
  ],
  declarations: [DiversPage]
})
export class DiversPageModule {}
