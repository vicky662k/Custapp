import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';



@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  url:string="https://jsonplaceholder.typicode.com/users";
  constructor(private http:HttpClient) { }

  Custdata():Observable<Customer[]>
  {
    return this.http.get<Customer[]>(this.url);
    }
}
