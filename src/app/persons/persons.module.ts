import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { PersonsRoutingModule } from './persons-routing.module';
import { PersonsComponent } from './persons/persons.component';


@NgModule({
  declarations: [
    PersonsComponent
  ],
  imports: [
    CommonModule,
    PersonsRoutingModule,
    MatTableModule
  ]
})
export class PersonsModule { }
