import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subscription } from '../model/subscription.model';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  //URL needs to change for the backend API
  url = 'https://kayo-telecom-service.azurewebsites.net/api/Subscriptions';

  constructor(private httpClient: HttpClient) { }

  find(subscription: Subscription): Observable<Subscription> {
    return this.httpClient.get<Subscription>(this.url + `/${subscription.id}`);
  }

  putSubscription(subscription: Subscription): Observable<number> {
    return this.httpClient.put<number>(this.url + `/${subscription.id}`, subscription);
  }

  save(subscription: Subscription): Observable<number> {
    return this.httpClient.post<number>(this.url, subscription);
  }

  remove(subscription: Subscription):Observable<number> {
    return this.httpClient.delete<number>(this.url + `/${subscription.id}`);
  }

}
