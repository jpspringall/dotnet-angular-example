import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../services/customers.service';
@Component({
    selector: 'customer-add',
    templateUrl: 'customer-add.component.html'
})

export class CustomerAddComponent implements OnInit {
    constructor(private service: CustomersService) { }

    ngOnInit() { }
}