import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {User, UserLogin} from "../models/User";
import {ApiResponse} from "../models/ApiResponse";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  BASE_URL: string = 'http://localhost:8080/user/';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient, public router: Router) { }

  signUp(user:User): Observable<ApiResponse>{
         return this.http.post<ApiResponse>(`${this.BASE_URL}signup`, user);

  }
  signIn(user:UserLogin):any{
    return this.http.post(`${this.BASE_URL}login`, user);

  }
  logOut(){
    
  }


}
