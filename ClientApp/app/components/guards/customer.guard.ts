import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { AppModel } from "../../store/models/app.model";
import { of } from "rxjs/observable/of";
import "rxjs/add/operator/do";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/take";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/catch";
import { selectCustomers } from "../../store/selectors/customers.selector";
import { CustomerModel } from "../../store/models/customer.model";
import { GetCustomers } from "../../store/actions/customers.actions";

@Injectable()
export class CustomerGuard implements CanActivate {
  constructor(private store: Store<AppModel>) {}
  canActivate(): Observable<boolean> {
    return this.checkStore()
      .switchMap(() => of(true))
      .catch(() => of(false));
  }

  checkStore(): Observable<any> {
    return this.store
      .select(selectCustomers)
      .do(data => {
        if (!data.length) {
          this.store.dispatch(new GetCustomers());
        }
      })
      .filter(f => f.length > 0)
      .take(1);
  }
}
