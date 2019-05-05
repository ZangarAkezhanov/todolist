import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { OrderItem } from 'src/app/models/order-item.model';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnInit {
  formData: OrderItem;
  itemList: Item[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<OrderItemsComponent>,
    private itemService: ItemService) { }

  ngOnInit() {
    // this.itemService.getItemList().then(res => this.itemList = res as Item[]);

    this.itemList  = this.itemService.getItemListFromArray();
    this.formData = {
      orderItemID: null,
      orderID: this.data.orderID,
      itemID: 0,
      quantity: 0,
      itemName: '',
      price: 0,
      total: 0
    };
  }

  updatePrice(ctrl) {
    if (ctrl.selectedIndex === 0) {
      this.formData.price = 0;
      this.formData.itemName = '';
    } else {
      this.formData.price = this.itemList[ctrl.selectedIndex - 1].price;
      this.formData.itemName = this.itemList[ctrl.selectedIndex - 1].name;
    }
  }

  updateTotal() {
    this.formData.total = parseFloat((this.formData.quantity * this.formData.price).toFixed(2));
  }
}
