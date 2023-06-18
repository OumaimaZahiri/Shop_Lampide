import { Component, Input, OnInit } from '@angular/core';
import { UsersListService } from '../users-list.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  @Input() orderProp: any; 
  
  product_detail: any;
  products: any;
  show_details = false;
  _user: any;

  constructor(private usersListService: UsersListService) { }

  ngOnInit(): void {
    this.products = this.orderProp.products;
    this.usersListService.getJSON().subscribe(data => {
      this._user = data.find((u: { id: any; }) => u.id == this.orderProp.user_id);
    });
  }

  product_details(product: any): void {
    this.product_detail = product;
    this.show_details=true;
  }

}
