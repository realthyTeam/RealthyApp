import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddYourLocationPageRoutingModule } from './add-your-location-routing.module';

import { AddYourLocationPage } from './add-your-location.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddYourLocationPageRoutingModule
  ],
  declarations: [AddYourLocationPage]
})
export class AddYourLocationPageModule {}
