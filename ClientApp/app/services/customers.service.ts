import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Customer} from '../customer';

@Injectable()
export class CustomersService {
    constructor(private http: Http) { }
   
    public getCustomers$() : Observable<Customer[]>{
        return this.http.get('/api/Customer')
            .map((response: Response) => response.json())
    }

    public addCustomer$(customer: Customer) : Observable<Response>{
        return this.http.post('/api/Customer', customer)
    }
}