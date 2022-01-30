import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  postSendEmail(data : any){
    return this.http.post<any>("http://localhost:3000/posts", data)
    .pipe(map((res:any)=>{
      return res;
    }));
  }

  getHeadquarter(){
    return this.http.get<any>("http://localhost:3000/headquarters")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateHeadquarter(data: any, id: number){
    return this.http.post<any>("http://localhost:3000/headquarters/"+id, data)
    .pipe(map((res:any)=>{
      return res;
    }));
  }
}
