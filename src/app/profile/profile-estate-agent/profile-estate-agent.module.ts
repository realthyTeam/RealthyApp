import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileEstateAgentPageRoutingModule } from './profile-estate-agent-routing.module';

import { ProfileEstateAgentPage } from './profile-estate-agent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileEstateAgentPageRoutingModule
  ],
  declarations: [ProfileEstateAgentPage]
})
export class ProfileEstateAgentPageModule {}
