import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import { AppModel } from '../../store/models/app.model';

@Component({
    selector: 'company-name',
    templateUrl: 'company-name.component.html'
})

export class CompanyNameComponent implements OnInit {
    public name$: Observable<string>;
    public currentDate: Date;
    constructor( private store:Store<AppModel>) { }

    ngOnInit() { 
        this.name$ = this.store.select((state)=>state.Company.Name);
        this.currentDate = new Date;
    }
}