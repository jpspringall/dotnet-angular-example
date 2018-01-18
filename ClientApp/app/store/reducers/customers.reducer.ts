import { CustomerModel } from '../models/customer.model';
import {SET_CUSTOMERS} from '../actions/customers.actions';

export const initialState: CustomerModel[] = []

export function customersReducer(state = initialState, action: any ): CustomerModel[] {
  const { type, payload } = action;
  switch (type) {
    case SET_CUSTOMERS:{
      return payload;
    }
    default: {
      return state;
    }
  }
}