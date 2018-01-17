import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { CompanyNameService } from '../../services/company-name.service'

@Component({
    selector: 'company-name',
    templateUrl: 'company-name.component.html'
})

export class CompanyNameComponent implements OnInit {
    public name$: Observable<Response>;
    public currentDate: Date;
    constructor(private service: CompanyNameService) { }

    ngOnInit() { 
        this.name$ = this.service.getCompanyName$()
            .map((res: Response )=> res.json())
        this.currentDate = new Date;
    }
}