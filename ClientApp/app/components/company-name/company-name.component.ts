import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'company-name',
    templateUrl: 'company-name.component.html'
})

export class CompanyNameComponent implements OnInit {
    public name: string = 'Tom & Dave\'s Awesome Juice Bar';
    public currentDate: Date;

    constructor() { }

    ngOnInit() { 
        this.currentDate = new Date();
    }
}