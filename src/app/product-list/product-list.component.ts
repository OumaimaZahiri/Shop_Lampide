import { Component, Input, OnInit } from '@angular/core';
import * as mat from '@angular/material';
import { ProductComponent } from '../product/product.component';
import { ProductsListService } from '../products-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductsListService]
})
export class ProductListComponent implements OnInit {

  products: any;
  product_detail: any;
  show_details = false;


  constructor(private productsListService : ProductsListService) {  
  }

  ngOnInit(): void { 
    this.productsListService.getJSON().subscribe(data => {
      this.products = data;
    });
  }

  product_details(product: any): void {
    this.product_detail = product;
    this.show_details=true;
  }

}
