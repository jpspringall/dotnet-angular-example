import { Component, OnInit } from '@angular/core';
import { Validators, AbstractControl, ValidationErrors, FormGroup, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import {Store} from '@ngrx/store';

import { CustomersService } from '../../services/customers.service';
import { CustomerModel as Customer } from '../../store/models/customer.model';
import {AppModel} from '../../store/models/app.model';
import { AddCustomer } from '../../store/actions/customers.actions'; 

@Component({
    selector: 'customer-add',
    templateUrl: 'customer-add.component.html'
})

export class CustomerAddComponent implements OnInit {
    public customerForm: FormGroup;
    public nameControl: FormControl;
    public balanceControl: FormControl;
    constructor(private service: CustomersService, private store: Store<AppModel>) { }

    ngOnInit() { 
        this.nameControl  = new FormControl('', [ Validators.required]);
        this.balanceControl  = new FormControl('', [Validators.minLength(2), Validators.required]);
        const fields = {name: this.nameControl, balance: this.balanceControl };
        this.customerForm = new FormGroup(fields);
    }

    public handleSubmit(){
        if(this.customerForm.valid){
            this.store.dispatch( new AddCustomer(this.customer) );
        }
    }

    get customer(): Customer{
        return {
            Name: this.nameControl.value,
            AccountBalance: this.balanceControl.value
        };
    }
}