import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../services/customers.service';
import { Validators, AbstractControl, ValidationErrors, FormGroup, FormControl } from '@angular/forms';
import { Customer } from '../../customer';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
@Component({
    selector: 'customer-add',
    templateUrl: 'customer-add.component.html'
})

export class CustomerAddComponent implements OnInit {
    public customerForm: FormGroup;
    public nameControl: FormControl;
    public balanceControl: FormControl;
    constructor(private service: CustomersService, private router: Router) { }

    ngOnInit() { 
        this.nameControl  = new FormControl('12312312', [ Validators.required]);
        this.balanceControl  = new FormControl('123123', [Validators.minLength(2), Validators.required]);
        const fields = {name: this.nameControl, balance: this.balanceControl };
        this.customerForm = new FormGroup(fields);
    }

    public handleSubmit(){
        if(this.customerForm.valid){
            this.service.addCustomer$(this.customer)
            .subscribe((response)=>{ 
                if(response.status === 200){
                 return this.router.navigate(['/customers'])
                }
                console.error('There was an error')
            });
        }
    }

    get customer(): Customer{
        return {
            Name: this.nameControl.value,
            AccountBalance: this.balanceControl.value
        };
    }
}