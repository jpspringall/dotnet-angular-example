import { Component, OnInit } from "@angular/core";
import { CustomersService } from "../../services/customers.service";
import { Observable } from "rxjs/Observable";
import { CustomerModel as Customer } from "../../store/models/customer.model";
import { Store } from "@ngrx/store";

import { AppModel } from "../../store/models/app.model";
import { selectCustomers } from "../../store/selectors/customers.selector";
import {
  GetCustomers,
  DeleteCustomer
} from "../../store/actions/customers.actions";

@Component({
  selector: "customers-list",
  templateUrl: "customers-list.component.html"
})
export class CustomersListComponent implements OnInit {
  public customers$: Observable<Customer[]>;
  constructor(private store: Store<AppModel>) {
    store.dispatch(new GetCustomers());
  }

  ngOnInit() {
    this.customers$ = this.store.select(selectCustomers);
  }

  onDelete(event: string) {
    const remove = window.confirm("Are you sure, you want to delete customer?");
    if (remove) {
      this.store.dispatch(new DeleteCustomer({ id: event, redirect: false }));
    }
  }
}
