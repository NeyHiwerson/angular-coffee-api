import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { PersonsRoutingModule } from './persons-routing.module';
import { PersonsComponent } from './persons/persons.component';



@NgModule({
  declarations: [
    PersonsComponent
  ],
  imports: [
    CommonModule,
    PersonsRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class PersonsModule { }
