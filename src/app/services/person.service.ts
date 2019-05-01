import { Injectable } from '@angular/core';
import { Person } from '../models/person.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  formData: Person;
  list: Person[];
  readonly rootURL = 'http://localhost:9090/api';

  constructor(private http: HttpClient) { }

  postPerson(formData: Person) {
    console.log('ok, then need post back server');
    this.list.push(formData);
     return this.http.post(this.rootURL + '/person', formData);
  }

  updatePerson(formData: Person) {
    return this.http.put(this.rootURL + '/person/' + formData.personID, formData);
  }

  deletePerson(id: number) {
    return this.http.delete(this.rootURL + '/person/' + id);
  }

  refreshList() {
    // this.http.get(this.rootURL + '/person')
    //   .toPromise().then(res => this.list = res as Person[]);
    this.list = [{
      personID: 1,
      fullName: 'Akezhanov Zangar',
      empCode: '001',
      mobile: '87077086838',
      position: 'developer' }];
  }
}
