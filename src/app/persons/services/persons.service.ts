import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../model/person';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  private readonly API = 'api/v1/people';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Person[]>(this.API).pipe(tap(persons => console.log(persons)));
  }
}
