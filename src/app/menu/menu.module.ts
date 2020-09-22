import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Menu } from './menu.page';
import {AgmCoreModule} from '@agm/core';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Menu }]),
    AgmCoreModule.forRoot({apiKey:'AIzaSyA9S8sl3CTPjBfziLs-rk4xvYua6Ou7mf0'})
  ],
  declarations: [Menu]
})
export class MenuModule {}
