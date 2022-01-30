import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import jsQR from 'jsqr';
import { ApiService } from '../shared/api.service';
import { HeadquarterModel } from './administrator-dashboard-headquarter.model';

@Component({
  selector: 'app-administrator-dashboard',
  templateUrl: './administrator-dashboard.component.html',
  styleUrls: ['./administrator-dashboard.component.css']
})
export class AdministratorDashboardComponent implements OnInit {

  scanActive = false;
  scanResult = ''; 
  formValue !: FormGroup; 
  headquarterModelObj: HeadquarterModel = new HeadquarterModel();
  headquarterData !: any;

  @ViewChild('video', { static: false } ) video!: ElementRef;
  @ViewChild('canvas', { static: false } ) canvas!: ElementRef;

  videoElement: any;
  canvasElement: any;
  canvasContext: any;

  constructor(private formbuilber: FormBuilder,
    private api: ApiService) { }

  ngAfterViewInit(){
    this.videoElement = this.video.nativeElement;
    this.canvasElement = this.canvas.nativeElement;
    this.canvasContext = this.canvasElement.getContext('2d');

  }

  ngOnInit(): void {
    this.formValue = this.formbuilber.group({
      name: [""],
      address: [""],
      email: [""],
      enterprise:  [""],
      geolocation: [""],
      status: [""],
      timestart: [],
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

  updateStatusHeadquarterD(row: any){
    this.headquarterModelObj.id = row.id;
    this.headquarterModelObj.name = row.name;
    this.headquarterModelObj.address = row.address;
    this.headquarterModelObj.email = row.email;
    this.headquarterModelObj.enterprise = row.enterprise;
    this.headquarterModelObj.geolocation = row.geolocation;
    this.headquarterModelObj.status = "desactivated";
    this.headquarterModelObj.timestart = row.timestart;

    this.api.updateHeadquarter(
        this.headquarterModelObj.id, 
        this.headquarterModelObj.name, 
        this.headquarterModelObj.address, 
        this.headquarterModelObj.email,
        this.headquarterModelObj.enterprise,
        this.headquarterModelObj.geolocation,
        this.headquarterModelObj.status,
        this.headquarterModelObj.timestart
      )
    .subscribe(res=>{
      alert('Updated status Headquarter. Now is '+this.headquarterModelObj.status);
    })
  }

  updateStatusHeadquarterA(row: any){
    this.headquarterModelObj.id = row.id;
    this.headquarterModelObj.name = row.name;
    this.headquarterModelObj.address = row.address;
    this.headquarterModelObj.email = row.email;
    this.headquarterModelObj.enterprise = row.enterprise;
    this.headquarterModelObj.geolocation = row.geolocation;
    this.headquarterModelObj.status = "activated";
    this.headquarterModelObj.timestart = row.timestart;

    this.api.updateHeadquarter(
        this.headquarterModelObj.id, 
        this.headquarterModelObj.name, 
        this.headquarterModelObj.address, 
        this.headquarterModelObj.email,
        this.headquarterModelObj.enterprise,
        this.headquarterModelObj.geolocation,
        this.headquarterModelObj.status,
        this.headquarterModelObj.timestart
      )
    .subscribe(res=>{
      alert('Updated status Headquarter. Now is '+this.headquarterModelObj.status);
    })
  }

  async startScan(){
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'environment' }
    });
    this.videoElement.srcObject = stream;
    this.videoElement.play();

    requestAnimationFrame(this.scan.bind(this));
  }

  async scan(){
    if ( this.videoElement.readyState === this.videoElement.HAVE_ENOUGH_DATA ){
      this.scanActive = true;

      this.canvasElement.height = this.videoElement.videoHeight;
      this.canvasElement.width = this.videoElement.videoWidth;

      this.canvasContext.drawImage(
        this.videoElement,
        0,
        0,
        this.canvasElement.width,
        this.canvasElement.height
      );

      const imageData = this.canvasContext.getImageData(
        0,
        0,
        this.canvasElement.width,
        this.canvasElement.height
      );

      const code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: 'dontInvert'
      });

      if ( code ){
        this.scanActive = false;
        this.scanResult = code.data;
        alert(`Open ${this.scanResult}?`);
      } else {
        if ( this.scanActive ){
          requestAnimationFrame(this.scan.bind(this));
        }
        requestAnimationFrame(this.scan.bind(this));
      }

    } else {
      requestAnimationFrame(this.scan.bind(this));
    }
  }

  stopScan(){
    this.scanActive = false;
  }

  reset(){
    this.scanResult = '';
  }

}
