import { Component } from '@angular/core';
import { CommonServiceService } from './common-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
result:any
status:any
request ={
  key1:"",
  key2:""
}

constructor(private service: CommonServiceService){
    this.getData();

}
getData(){
  this.service.getData(this.request).subscribe((Response:any) => {
    console.log(Response);
   this.result = Response.sum;  
   this.status = Response.status;
  });
}
}
