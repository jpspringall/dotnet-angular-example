import { Component, OnInit } from '@angular/core';
import {CustomersService} from '../../services/customers.service';
import { Observable } from 'rxjs/Observable';
import { Customer } from '../../customer';

@Component({
    selector: 'customers-list',
    templateUrl: 'customers-list.component.html'
})

export class CustomersListComponent implements OnInit {

    public customers$: Observable<Customer[]>
    constructor(private service: CustomersService) { }

    ngOnInit() { 
        this.customers$ = this.service.getCustomers$();
    }
}