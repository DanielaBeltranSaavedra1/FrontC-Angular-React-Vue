import { Injectable } from '@angular/core';
import {User} from './user.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  formData: User;
  readonly rootUrl = 'https://localhost:44320/api';
  constructor(private http: HttpClient ) { }
postUser(formData: User){
  return this.http.post(this.rootUrl+'/Users',formData);
 }
 login(){
  var body={
    UserName:this.formData.UserName,
    Password: this.formData.Password
  };
  return this.http.post(this.rootUrl+'/login',body);
 }
}
