import { Injectable } from '@angular/core';
import { Order } from '../models/order.model';
import { OrderItem } from '../models/order-item.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  formData: Order;
  orderItems: OrderItem[];

  constructor(private http: HttpClient) { }

  saveOrUpdateOrder() {
    const body = {
      ...this.formData,
      OrderItems: this.orderItems
    };
    return this.http.post(environment.apiURL + '/Order', body);
  }

  getOrderList() {
    return this.http.get(environment.apiURL + '/Order').toPromise();
  }

  getOrderListFromArray() {
    return [{orderID: 1,
      orderNo: 'AA1',
      customer: 'Zangar',
      pMethod: 'Cash',
      gTotal: 12}];
  }

  getOrderByID(id: number): any {
    return this.http.get(environment.apiURL + '/Order/' + id).toPromise();
  }

  deleteOrder(id: number) {
    return this.http.delete(environment.apiURL + '/Order/' + id).toPromise();
  }
}
