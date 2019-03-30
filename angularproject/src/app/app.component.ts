import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name : string = 'June';
  score : number = 49;

  student:any = {
    name : "June",
    studentID : "5921602485",
    weight : 55,
    height : 175,
  }
  
  studentList:any = [{
    name : "Pang",
    studentID : "5921602612",
    weight : 40,
    height : 150,
  },
  {
    name : "Mo",
    studentID : "5921602779",
    weight : 54,
    height : 159,
    
  },
  {
    name : "June",
    studentID : "5921602485",
    weight : 55,
    height : 175,
  }
];


  constructor(){
    this.student.bmi=(this.student.weight/
    ((this.student.height/100)*(this.student.height/100))).toFixed(2);
  
    this.studentList.map((object,index)=>{
      let obj:any = object;
      obj.bmi = (object.weight/((object.height/100)*(object.height/100))).toFixed(2);
      return obj;
   })
  
    console.log(this.studentList);

}

}
