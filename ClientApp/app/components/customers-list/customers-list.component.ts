import { Component, OnInit } from '@angular/core';
import {CustomersService} from '../../services/customers.service';

@Component({
    selector: 'customers-list',
    templateUrl: 'customers-list.component.html'
})

export class CustomersListComponent implements OnInit {
    constructor(private service: CustomersService) { }

    ngOnInit() { }
}