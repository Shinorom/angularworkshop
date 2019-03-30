import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})

export class ProductCartComponent implements OnInit {

  cartList:any=[];
  _addProduct : any;
  get cartProduct():any{
    return this._addProduct;
  }

  ngOnInit() {
  }
  @Input()
  set addProduct(val:any){
    if(val){
      this.cartList.push(JSON.parse(JSON.stringify(val)))
    }


}
}
