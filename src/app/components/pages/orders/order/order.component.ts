import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { OrderItemsComponent } from '../order-items/order-items.component';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/models/customer.model';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  customerList: Customer[];
  isValid = true;

  constructor(private service: OrderService,
        private dialog: MatDialog,
        private customerService: CustomerService,
        private toastr: ToastrService,
        private router: Router,
        private currentRoute: ActivatedRoute) { }

  ngOnInit() {
    const orderID = this.currentRoute.snapshot.paramMap.get('orderID');
    if (orderID == null) {
      this.resetForm();
    } else {
      this.service.getOrderByID(parseInt(orderID  )).then(res => {
        this.service.formData = res.order;
        this.service.orderItems = res.orderDetails;
      });
    }
    this.resetForm();
    // this.customerService.getCustomerList().then(res => this.customerList = res as Customer[]);
    this.customerList = this.customerService.getCustomerListFromArray();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.service.formData = {
      orderID: null,
      orderNo: Math.floor(100000 + Math.random() * 900000).toString(),
      customerID: 0,
      pMethod: '',
      gTotal: 0,
      deletedOrderItemIDs: ''
    };
    this.service.orderItems = [];
  }

  addOrEditOrderItem(orderItemIndex: number, orderID: number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = '50%';
    dialogConfig.data = {orderItemIndex, orderID};
    this.dialog.open(OrderItemsComponent, dialogConfig).afterClosed().subscribe(res => {
      this.updateGrandTotal();
    });
  }

  onDeleteOrderItem(orderItemID: number, i: number) {
    if (orderItemID != null) {
       this.service.formData.deletedOrderItemIDs += orderItemID + ',';
    }
    this.service.orderItems.splice(i, 1);
    this.updateGrandTotal();
  }

  updateGrandTotal() {
    this.service.formData.gTotal =  this.service.orderItems.reduce((prev, curr) => {
      return prev + curr.total;
    }, 0);
    this.service.formData.gTotal  = parseFloat(this.service.formData.gTotal.toFixed(2));
  }

  validateForm(): boolean {
    this.isValid = true;
    if (this.service.formData.customerID === 0) {
      this.isValid = false;
    } else if (this.service.orderItems.length === 0) {
      this.isValid = false;
    }
    return this.isValid;
  }

  onSubmit(form: NgForm) {
    if (this.validateForm()) {
      this.service.saveOrUpdateOrder().subscribe(res => {
        this.resetForm();
        this.toastr.success('Submitted successfully', 'Restaurant App.');
        this.router.navigate(['/orders']);
      });
    }
  }
}
