import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  getItemList() {
    return this.http.get(environment.apiURL + '/Item').toPromise();
  }

  getItemListFromArray() {
    return [{itemID: 1, name: '122', price: 10}, {itemID: 2, name: '123', price: 11}];
  }
}
