import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { HeadquarterModel } from './administrator-dashboard-headquarter.model';

@Component({
  selector: 'app-administrator-dashboard',
  templateUrl: './administrator-dashboard.component.html',
  styleUrls: ['./administrator-dashboard.component.css']
})
export class AdministratorDashboardComponent implements OnInit {

  formValue !: FormGroup; 
  headquarterModelObj: HeadquarterModel = new HeadquarterModel();
  headquarterData !: any;


  constructor(private formbuilber: FormBuilder,
    private api: ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilber.group({
      name: [""],
      address: [""],
      email: [""],
      enterprise:  [""],
      geolocation: [""],
      status: [""],
      timestart: [""],
    })
    this.getAllHeadquarter();
  }
  
  getAllHeadquarter(){
    this.api.getHeadquarter()
    .subscribe(res=>{
      this.headquarterData = res;
    })
  }

  onShow(row: any){
    
    this.formValue.controls['name'].setValue(row.name);
    this.formValue.controls['address'].setValue(row.address);
    this.formValue.controls['email'].setValue(row.email);
    this.formValue.controls['enterprise'].setValue(row.enterprise);
    this.formValue.controls['geolocation'].setValue(row.geolocation);
    this.formValue.controls['status'].setValue(row.status);
    this.formValue.controls['timestart'].setValue(row.timestart);
  }

  updateStatusHeadquarter(row: any){
    this.headquarterModelObj.id = row.id;
    this.headquarterModelObj.status = 'desactivated';
    this.api.updateHeadquarter(this.headquarterModelObj, this.headquarterModelObj.id)
    .subscribe(res=>{
      alert('Updated status Headquarter. Now is'+this.headquarterModelObj.status);
    })
  }

}
