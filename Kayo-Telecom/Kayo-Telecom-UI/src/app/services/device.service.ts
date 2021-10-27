import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Device } from '../model/device.model';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  url = 'https://kayo-telecom-service.azurewebsites.net/api/Devices';

  constructor(private httpClient: HttpClient) { }

  find(device:Device):Observable<Device> {
    return this.httpClient.get<Device>(this.url + `/${device.id}`);
  }

  save(device:Device):Observable<number> {
    return this.httpClient.post<number>(this.url, device);
  }

  putDevice(device:Device):Observable<number> {
    return this.httpClient.put<number>(this.url + `/${device.id}`, device);
  }

  remove(device:Device):Observable<number> {
    return this.httpClient.delete<number>(this.url + `/${device.id}`);
  }
}
