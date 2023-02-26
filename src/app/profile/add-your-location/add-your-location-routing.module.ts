import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddYourLocationPage } from './add-your-location.page';

const routes: Routes = [
  {
    path: '',
    component: AddYourLocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddYourLocationPageRoutingModule {}
