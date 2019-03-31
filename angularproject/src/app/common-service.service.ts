import { Injectable } from '@angular/core';

import { TransferHttpService } from '@gorniv/ngx-transfer-http';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  private port = '3001'
  private rootPath = 'http://localhost:'+this.port;
  private getDataPath = this.rootPath +'/test/getData'
  parameter: any ={
    params:{},
    reponseType:"json"
  }
  constructor(
    private http: TransferHttpService,
  ){
    
  }

  getData(param){
    this.parameter.params = param;
    return this.http.get(this.getDataPath,this.parameter)
  }
}


