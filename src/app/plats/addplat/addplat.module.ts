import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddplatPageRoutingModule } from './addplat-routing.module';
import { AddplatPage } from './addplat.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddplatPageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [AddplatPage]
})
export class AddplatPageModule {
}
