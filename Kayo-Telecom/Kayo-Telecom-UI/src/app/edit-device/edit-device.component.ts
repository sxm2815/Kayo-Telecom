import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Device } from '../model/device.model';
import { DeviceService } from '../services/device.service';

@Component({
  selector: 'app-edit-device',
  templateUrl: './edit-device.component.html',
  styleUrls: ['./edit-device.component.css']
})
export class EditDeviceComponent implements OnInit {

  newDevice:Device = new Device(0,'','','');
  deviceForm = this.fb.group({
    deviceName: ['', Validators.required],
    deviceHolder: ['', Validators.required],
    phoneNumber: ['', Validators.required]
  });

  constructor(private router:Router, private deviceService:DeviceService, private fb: FormBuilder) { }

  ngOnInit(): void {
    if(localStorage.getItem('deviceId') !== null){

      var deviceId = localStorage.getItem('deviceId') || -1;

      this.deviceService.find(+deviceId).subscribe( device => {
        this.newDevice = device;
        this.deviceForm = this.fb.group({
          deviceName: [this.newDevice.deviceName, Validators.required],
          deviceHolder: [this.newDevice.deviceHolder, Validators.required],
          phoneNumber: [this.newDevice.phoneNumber, Validators.required]
        });
        localStorage.removeItem('deviceId');
      });
    } else {
      alert("Device not found!");
      this.router.navigateByUrl('/');
    }
    document.body.style.background = "#f4faff";
  }

  save(): void {
    this.newDevice.deviceHolder = this.deviceForm.get('deviceHolder')?.value;
    this.newDevice.deviceName = this.deviceForm.get('deviceName')?.value;
    this.newDevice.phoneNumber = this.deviceForm.get('phoneNumber')?.value;
    
    this.deviceService.putDevice(this.newDevice).subscribe( res => {
      this.router.navigateByUrl('/myaccount').then(() => {
        window.location.reload();
      });
    }); 
  }

}
