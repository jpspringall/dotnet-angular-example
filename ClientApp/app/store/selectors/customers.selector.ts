import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AppModel } from "../models/app.model";
import { CustomerModel } from "../models/customer.model";
import { ActivatedRouteSnapshot } from "@angular/router/src/router_state";

export const selectCustomers = createFeatureSelector<CustomerModel[]>(
  "Customers"
);

export const selectCustomer = (id: string) =>
  createSelector(
    selectCustomers,
    (customers: CustomerModel[]): CustomerModel => {
      return customers.filter(c => c.id === parseInt(id))[0];
    }
  );
