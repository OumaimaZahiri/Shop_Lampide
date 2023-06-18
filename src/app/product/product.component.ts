import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() productProp: any; 
  @Input() productDetails: any; 

  _showDetails = false;
  _showNumber = false;
  _number = 1;
  
  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  public set showDetails(show: boolean) {
    this._showDetails = show;
    this._showNumber = false;
  }

  @Input()
  public set showNumber(nb: number) {
    this._showNumber = true;
    this._number = nb;
  }
}
