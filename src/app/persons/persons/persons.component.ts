import { Component, OnInit } from '@angular/core';
import { Person } from '../model/person';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent implements OnInit {

  persons: Person[] = [];

  displayedColumns = ['_id','name','cpf','food'];

  constructor() {
    //this.persons = [];
   }

  ngOnInit(): void {
  }

}
