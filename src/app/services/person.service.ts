import { Injectable } from '@angular/core';
import { Person } from '../models/person.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  formData: Person;
  list: Person[];
  readonly rootURL = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  postPerson(formData: Person) {
    console.log('ok, then need post back server');
    this.list.push(formData);
     return this.http.post(this.rootURL + '/persons', formData);
  }

  updatePerson(formData: Person) {
    return this.http.put(this.rootURL + '/persons/' + formData.personID, formData);
  }

  deletePerson(id: number) {
    return this.http.delete(this.rootURL + '/persons/' + id);
  }

  refreshList() {
     this.http.get(this.rootURL + '/persons')
       .toPromise().then(res => this.list = res as Person[]);
  }
}
