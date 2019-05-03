import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { OrderItem } from 'src/app/models/order-item.model';

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnInit {
  fromData: OrderItem;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<OrderItemsComponent>) { }

  ngOnInit() {
    this.fromData = {
      orderItemID: null,
      orderID: this.data.orderID,
      itemID: 0,
      quantity: 0,
      itemName: '',
      price: 0,
      total: 0
    };
  }

}
