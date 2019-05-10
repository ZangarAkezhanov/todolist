import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/models/order.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orderList;

  constructor(private service: OrderService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.refreshList();
  }

  refreshList() {
   // this.service.getOrderList().then(res => this.orderList = res as Order[]);
   this.orderList = this.service.getOrderListFromArray();
  }

  openForEdit(orderID: number) {
    this.router.navigate(['/order/edit/' + orderID]);
  }

  onOrderDelete(orderID: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteOrder(orderID).then(res => {
        this.refreshList();
        this.toastr.warning('Deleted successfully', 'Restaurant App');
      });
    }
  }
}
