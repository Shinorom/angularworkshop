import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  productList:any = [{
    pId : "0001",
    pName : "แปลงสีฟัน",
    pCost : 50,
  },
  {
    pId : "0002",
    pName : "ยาสีฟัน",
    pCost : 69,
  },
  {
    pId : "0003",
    pName : "แก้วน้ำ",
    pCost : 25,
  }
];

selectedProduct:any;

selectProduct(p){
  this.selectedProduct = p;

}

  constructor(){
    
}


}
