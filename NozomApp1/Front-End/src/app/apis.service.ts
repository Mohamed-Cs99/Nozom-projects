import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  currentUser = new BehaviorSubject(null);

  constructor(private _HttpClient: HttpClient) { }

  saveCurrentUser() {
    let token: any = localStorage.getItem('userToken');
    this.currentUser.next(jwtDecode(token));
    console.log(this.currentUser);
  }
  
  Login(data: any): Observable<any> {
    return this._HttpClient.post('http://127.0.0.1:8000/auth/token/login', data);
  }

  postOfficerData(data:any):Observable<any>
  {
    return this._HttpClient.post('http://127.0.0.1:8000/api/person',data); 
  }
}
