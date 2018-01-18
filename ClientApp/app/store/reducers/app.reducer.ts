import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap, Action } from '@ngrx/store';
import { AppModel } from '../models/app.model';
import {companyReducer} from './company.reducer';
import { customersReducer } from './customers.reducer';

export const appReducers: ActionReducerMap<AppModel, Action> = {
  Company: companyReducer,
  Customers: customersReducer,
};
