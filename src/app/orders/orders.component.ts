
import { Component, OnInit } from '@angular/core';
import { OrdersListService } from '../orders-list.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: any;
  _current_order: any;

  constructor(private ordersListService: OrdersListService) { }

  ngOnInit(): void {
    this.ordersListService.getJSON().subscribe((data: any) => {
      this.orders = data;
    });
  }

  public set current_order(order: any)
  {
    this._current_order = order;
  }

}