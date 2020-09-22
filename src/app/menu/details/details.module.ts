import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsPageRoutingModule } from './details-routing.module';
import {AgmCoreModule} from '@agm/core';

import { DetailsPage } from './details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsPageRoutingModule,
    AgmCoreModule.forRoot({apiKey:'AIzaSyA9S8sl3CTPjBfziLs-rk4xvYua6Ou7mf0'})
  ],
  declarations: [DetailsPage]
})
export class DetailsPageModule {}
