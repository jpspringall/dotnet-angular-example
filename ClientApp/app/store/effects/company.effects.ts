import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/withLatestFrom';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { Store } from '@ngrx/store';

import { CompanyNameService } from '../../services/company-name.service';
import { AppModel } from '../models/app.model';
import { GET_COMPANY_NAME } from '../actions/company.actions';
export interface DefaultAction {
  type: string;
  payload: any;
}

@Injectable()
export class CompanyEffects {
  /**
   * Example of a caching side effect
   *
   * @type {"Observable".Observable<R>}
   */
  @Effect({dispatch:false})
  public getCompanyName$ = this.actions$
    .ofType<any>(GET_COMPANY_NAME)
    .mergeMap(() => {
      return this.service.getCompanyName$()
        .map((value) => {
            console.error(value.json());
        } )
    });

  constructor(private actions$: Actions, private service: CompanyNameService, private state$: Store<AppModel>) {}
}