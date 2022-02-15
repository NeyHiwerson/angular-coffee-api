import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { Person } from '../model/person';
import { PersonsService } from '../services/persons.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent implements OnInit {

  persons$: Observable<Person[]>;

  displayedColumns = ['_id','name','cpf','food'];

  constructor(
    private personsService: PersonsService,
    public dialog: MatDialog
    ) {


    this.persons$ = this.personsService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar a lista');
        return of([]);
      })
    );
   }

   onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }


  ngOnInit(): void {

  }

}
