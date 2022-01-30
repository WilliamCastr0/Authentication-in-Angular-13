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

  updateHeadquarter(id: number, name: any, address: any, email: any, enterprise: any, geolocation: any, status: any, timestart: number){
    return this.http.put<any>("http://localhost:3000/headquarters/"+id,
    {
      "id": id,
      "name": name,
      "address": address,
      "email": email,
      "enterprise": enterprise,
      "geolocation": geolocation,
      "status": status,
      "timestart": timestart,
    })
    .pipe(map((res:any)=>{
      return res;
    }));
  }

  getUserInfo(){
    return this.http.get<any>("http://localhost:3000/users")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
