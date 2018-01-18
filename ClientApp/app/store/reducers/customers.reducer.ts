import { CustomerModel } from '../models/customer.model';

export const initialState: CustomerModel[] = []

export function customersReducer(state = initialState, action: any ): CustomerModel[] {
  const { type, payload } = action;
  switch (type) {
    default: {
      return state;
    }
  }
}