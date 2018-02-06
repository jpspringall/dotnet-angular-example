import { Action } from "@ngrx/store";
import { CustomerModel } from "../models/customer.model";

export const GET_CUSTOMERS = "[CUSTOMERS] Get customers";
export const SET_CUSTOMERS = "[CUSTOMERS] Set customers";
export const ADD_CUSTOMER = "[CUSTOMERS] Add customer";
export const EDIT_CUSTOMER = "[CUSTOMERS] Edit customer";
export const DELETE_CUSTOMER = "[CUSTOMERS] Delete customer";

export class GetCustomers implements Action {
  public readonly type = GET_CUSTOMERS;

  constructor() {}
}

export class SetCustomers implements Action {
  public readonly type = SET_CUSTOMERS;

  constructor(private payload: CustomerModel[]) {}
}
export class AddCustomer implements Action {
  public readonly type = ADD_CUSTOMER;
  constructor(private payload: CustomerModel) {}
}

export class EditCustomer implements Action {
  public readonly type = EDIT_CUSTOMER;
  constructor(private payload: CustomerModel) {}
}

export class DeleteCustomer implements Action {
  public readonly type = DELETE_CUSTOMER;
  constructor(private payload: number) {}
}

export type Actions = GetCustomers | AddCustomer | EditCustomer | SetCustomers;
