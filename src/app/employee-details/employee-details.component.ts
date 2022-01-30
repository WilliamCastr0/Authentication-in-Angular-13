import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../shared/api.service';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  userData !: any;
  userId: number = 0;

  constructor( private route: ActivatedRoute, private api: ApiService ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.userId = Number(params.get('id'));
    }),

    this.getUser();
  }

  getUser(){
    this.api.getUserInfo()
    .subscribe(res=>{
      this.userData = res;
    })
  }
}
