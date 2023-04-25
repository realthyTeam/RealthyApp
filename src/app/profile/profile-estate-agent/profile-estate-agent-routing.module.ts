import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileEstateAgentPage } from './profile-estate-agent.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileEstateAgentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileEstateAgentPageRoutingModule {}
