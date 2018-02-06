import { Component, OnInit } from "@angular/core";
import {
  Validators,
  AbstractControl,
  ValidationErrors,
  FormGroup,
  FormControl
} from "@angular/forms";
import { Subscription } from "rxjs/Subscription";
import { Store } from "@ngrx/store";

import { CustomersService } from "../../services/customers.service";
import { CustomerModel as Customer } from "../../store/models/customer.model";
import { CustomerDeleteModel as CustomerDelete } from "../../store/models/customer.delete.model";
import { AppModel } from "../../store/models/app.model";
import {
  EditCustomer,
  DeleteCustomer
} from "../../store/actions/customers.actions";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { selectCustomer } from "../../store/selectors/customers.selector";

@Component({
  selector: "customer-edit",
  templateUrl: "customer-edit.component.html"
})
export class CustomerEditComponent implements OnInit {
  public customerForm: FormGroup;
  public idControl: FormControl;
  public nameControl: FormControl;
  public balanceControl: FormControl;
  public customer$: Observable<Customer>;
  constructor(
    private service: CustomersService,
    private store: Store<AppModel>,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    //Got to be a better way of doing this
    this.route.params
      .take(1)
      .subscribe(
        params =>
          (this.customer$ = this.store.select(selectCustomer(params["id"])))
      );

    this.customer$.take(1).subscribe(c => {
      this.idControl = new FormControl(c.id, [Validators.required]);
      this.nameControl = new FormControl(c.name, [Validators.required]);
      this.balanceControl = new FormControl(c.accountBalance, [
        Validators.minLength(2),
        Validators.required
      ]);
    });

    //Got to be a better way of doing this

    const fields = {
      id: this.idControl,
      name: this.nameControl,
      balance: this.balanceControl
    };
    this.customerForm = new FormGroup(fields);
  }

  public handleSubmit() {
    if (this.customerForm.valid) {
      this.store.dispatch(new EditCustomer(this.customer));
    }
  }

  get customer(): Customer {
    return {
      id: this.idControl.value,
      name: this.nameControl.value,
      accountBalance: this.balanceControl.value
    };
  }

  onDelete() {
    const remove = window.confirm("Are you sure, you want to delete customer?");
    if (remove) {
      this.store.dispatch(
        new DeleteCustomer({ id: this.idControl.value, redirect: true })
      );
    }
  }
}
