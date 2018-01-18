import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Store} from '@ngrx/store';

import {GetCompanyName} from '../../store/actions/company.actions';

import { AppModel } from '../../store/models/app.model';

import {selectCompanyName} from '../../store/selectors/company.selector' 

@Component({
    selector: 'company-name',
    templateUrl: 'company-name.component.html'
})

export class CompanyNameComponent implements OnInit {
    public name$: Observable<string>;
    public currentDate: Date;

    constructor( private store:Store<AppModel>) { 
        store.dispatch( new GetCompanyName() )
    }

    ngOnInit() { 
        this.name$ = this.store.select(selectCompanyName);
        this.currentDate = new Date;
    }
}