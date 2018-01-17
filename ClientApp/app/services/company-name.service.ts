import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CompanyNameService {
    constructor(private http: Http) { }
    public getCompanyName$(): Observable<Response>{
        return this.http.get('/api/Company/CompanyName')
    } 
}