import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { User } from '../model/user';

const   baseUrl = 'http://localhost:3000/user';

@Injectable({
  providedIn: 'root'
})
export class CreateFormService {

  constructor(private http: HttpClient) {}

  addUser(user:User):Observable<any>{
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(user);
    console.log(body)
    //return this.http.post<User>(`${baseUrl}`,user);
    return this.http.post(baseUrl, body,{'headers':headers})
    
  }

}
