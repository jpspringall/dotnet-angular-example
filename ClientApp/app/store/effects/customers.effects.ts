import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/withLatestFrom";
import { Injectable } from "@angular/core";
import { Effect, Actions } from "@ngrx/effects";
import { of } from "rxjs/observable/of";
import { Store } from "@ngrx/store";
import { Router } from "@angular/router";

import { CustomersService } from "../../services/customers.service";
import { AppModel } from "../models/app.model";

import {
  GET_CUSTOMERS,
  ADD_CUSTOMER,
  EDIT_CUSTOMER,
  DELETE_CUSTOMER,
  SetCustomers,
  DeleteCustomer,
  GetCustomers
} from "../actions/customers.actions";

export interface DefaultAction {
  type: string;
  payload: any;
}

@Injectable()
export class CustomerEffects {
  @Effect()
  public getCustomers$ = this.actions$
    .ofType<any>(GET_CUSTOMERS)
    .mergeMap(() => {
      return this.service
        .getCustomers$()
        .map(customers => new SetCustomers(customers));
    });

  @Effect({ dispatch: false })
  public addCustomer$ = this.actions$
    .ofType<any>(ADD_CUSTOMER)
    .mergeMap(action => {
      console.log(action);
      this.service.addCustomer$(action.payload).subscribe(response => {
        if (response.status === 200) {
          return this.router.navigate(["/customers"]);
        }
        console.error("There was an error");
      });
      return of(true);
    });

  @Effect({ dispatch: false })
  public editCustomer$ = this.actions$
    .ofType<any>(EDIT_CUSTOMER)
    .mergeMap(action => {
      console.log(action);
      this.service.editCustomer$(action.payload).subscribe(response => {
        if (response.status === 200) {
          return this.router.navigate(["/customers"]);
        }
        console.error("There was an error");
      });
      return of(true);
    });

  @Effect({ dispatch: false })
  public deleteCustomer$ = this.actions$
    .ofType<any>(DELETE_CUSTOMER)
    .mergeMap((action: DeleteCustomer) => {
      console.log(action);
      this.service.deleteCustomer$(action.payload.id).subscribe(response => {
        if (response.status === 200) {
          if (action.payload.redirect) {
            return this.router.navigate(["/customers"]);
          } else {
            return this.state$.dispatch(new GetCustomers());
          }
        }
        console.error("There was an error");
      });
      return of(true);
    });

  constructor(
    private actions$: Actions,
    private service: CustomersService,
    private state$: Store<AppModel>,
    private router: Router
  ) {}
}
