import { Action } from '@ngrx/store';
import {CustomerModel} from '../models/customer.model';

export const GET_CUSTOMERS = '[CUSTOMERS] Get customers';
export const SET_CUSTOMERS = '[CUSTOMERS] Set customers';

export class GetCustomers implements Action {
  public readonly type = GET_CUSTOMERS;

  constructor() {}
}
export class SetCustomers implements Action {
  public readonly type = SET_CUSTOMERS;

  constructor(private payload:CustomerModel[]) {}
}

export type Actions = GetCustomers
| SetCustomers ;
