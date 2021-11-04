import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Device } from '../model/device.model';
import { DeviceService } from '../services/device.service';

@Component({
  selector: 'app-edit-device',
  templateUrl: './edit-device.component.html',
  styleUrls: ['./edit-device.component.css']
})
export class EditDeviceComponent implements OnInit {

  newDevice:Device = new Device(2,'','','');

  constructor(private router:Router, private deviceService:DeviceService) { }

  ngOnInit(): void {
    this.deviceService.find(1).subscribe( device => {
      this.newDevice = device;
    });
  }

  save(): void {
    this.deviceService.putDevice(this.newDevice).subscribe( res => {
      let route = this.router.config.find(r => r.path ==='/myaccount');
      if(route){
        this.router.navigateByUrl('/myaccount').then(() => {
          window.location.reload();
        });
      }
    });
  }

}
