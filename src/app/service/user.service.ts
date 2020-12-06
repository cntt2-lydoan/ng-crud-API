import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiURL = 'https://jsonplaceholder.typicode.com/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private HttpClient: HttpClient) { }

  readAll() : Observable<any>{
    return this.HttpClient.get(apiURL);
  }

  readId(id: any) : Observable<any>{
    // console.log(id);
    return this.HttpClient.get(`${apiURL}/${id}`);
  }

  create(data:any) : Observable<any>{
    return this.HttpClient.post(apiURL,data);
  }

  update(id:any,data:any) : Observable<any>{
    return this.HttpClient.put(`${apiURL}/${id}`,data);
  }

  delete(id:any) : Observable<any>{
    console.log(id);
    
    return this.HttpClient.delete(`${apiURL}/${id}`)
  }
  deleteAll() : Observable<any>{
    return this.HttpClient.delete(apiURL);
  }

  searchByName() : Observable<any>{
    return this.HttpClient.get(`${apiURL}?name=${name}`);
  } 
}
