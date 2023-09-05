import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropertiesPage } from './properties.page';

const routes: Routes = [
  {
    path: '',
    component: PropertiesPage
  },
  {
    path: ':id',
    component: PropertiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropertiesPageRoutingModule {}
