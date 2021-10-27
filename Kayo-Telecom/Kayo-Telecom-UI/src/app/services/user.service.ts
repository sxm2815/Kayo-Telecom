import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //URL needs to change for the backend API
  url = 'https://kayo-telecom-service.azurewebsites.net/api/Users';

  constructor(private httpClient: HttpClient) { }

  login(username: string, password: string): Observable<number> {
    return this.httpClient.get<number>(this.url + `/${username}` + `/${password}`)
  }

  //get specific user by id ie: api/Users/5
  find(userID: string):Observable<User> {
    return this.httpClient.get<User>(this.url + `/${userID}`);
  }

  //post api/Users to create new user
  save(user: User):Observable<number> {
    return this.httpClient.post<number>(this.url, user);
  }

  //Put user for update api/Users/5
  putUser(user: User):Observable<number> {
    return this.httpClient.put<number>(this.url + `/${user.id}`, user);
  }
  
  remove(user: User):Observable<number> {
    return this.httpClient.delete<number>(this.url + `/${user.id}`);
  }
}
