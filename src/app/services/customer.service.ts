import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getCustomerList() {
    return this.http.get(environment.apiURL + '/customer').toPromise();
  }
  getCustomerListFromArray(): Customer[] {
    return [{ customerID: 1, name: 'Akezhanov Zangar'},
    {customerID: 2, name: 'Askerbekov Meirzhan'}];
  }
}
