import { Component } from '@angular/core';
import { CommonServiceService } from './common-service.service';
import { SelectorContext } from '@angular/compiler';

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
userDetail : any = {
  id:"",
  name:""
}


constructor(private service: CommonServiceService){
   // this.getData();
    this.getUserDetail();

}
getData(){
  this.service.getData(this.request).subscribe((Response:any) => {
    console.log(Response);
   this.result = Response.sum;  
   this.status = Response.status;
  });
}

noteDetail : any = [];
studentId = "5721602287";
getUserDetail(){
  let request ={
    id:this.studentId
  }
  this.service.getUserDetail(request).subscribe((response:any) =>{
    console.log(response);
    this.userDetail = response.user[0]
    this.noteDetail = response.noteDetail[0].note_type
    console.log(this.userDetail,this.noteDetail);
  });

}
  
  listDetail:any = [];
  selectNote(list){
    this.listDetail=list
  }

  errorMsg="";
  updateNoteName(){
    let request={
      id:this.userDetail.id,
      noteId:this.editNoteDetail.note_id,
      name:this.editNoteDetail.note_name
    }
    this.service.updateNoteName(request).subscribe((Response:any)=>{
      if(Response.success){
        this.errorMsg="แก้ไขสำเร็จ"
        this.getUserDetail();
      }else{
        this.errorMsg="แก้ไขไม่สำเร็จ"
      }
      setTimeout(()=>{
        this.errorMsg=''
      },2000)
    });
  }
  
  editNoteDetail : any = {
    note_id:"",
    name:""
  };

  editNote(note){
    console.log(note);
    this.editNoteDetail=JSON.parse(
      JSON.stringify(note)
    );
  }
}
