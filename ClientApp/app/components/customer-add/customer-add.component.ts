import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../services/customers.service';
import { Validators, AbstractControl, ValidationErrors, FormGroup, FormControl } from '@angular/forms';
@Component({
    selector: 'customer-add',
    templateUrl: 'customer-add.component.html'
})

export class CustomerAddComponent implements OnInit {
    public customerForm: FormGroup;
    public nameControl: FormControl;
    public balanceControl: FormControl;
    constructor(private service: CustomersService) { }

    ngOnInit() { 
        this.nameControl  = new FormControl('', [ Validators.required]);
        this.balanceControl  = new FormControl('', [Validators.minLength(2), Validators.required]);
        const fields = {name: this.nameControl, balance: this.balanceControl };
        this.customerForm = new FormGroup(fields);
    }

    public handleSubmit(){
        console.log(this.customerForm.valid);
    }
}