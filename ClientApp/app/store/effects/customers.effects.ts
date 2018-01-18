import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/withLatestFrom';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { Store } from '@ngrx/store';

import { CustomersService } from '../../services/customers.service';
import { AppModel } from '../models/app.model';
import { GET_CUSTOMERS, SetCustomers } from '../actions/customers.actions';
export interface DefaultAction {
  type: string;
  payload: any;
}

@Injectable()
export class CustomerEffects {
  /**
   * Example of a caching side effect
   *
   * @type {"Observable".Observable<R>}
   */
  @Effect()
  public getCompanyName$ = this.actions$
    .ofType<any>(GET_CUSTOMERS)
    .mergeMap(() => {
      return this.service.getCustomers$()
        .map((customers) => new SetCustomers(customers))
    });

  constructor(private actions$: Actions, private service: CustomersService, private state$: Store<AppModel>) {}
}