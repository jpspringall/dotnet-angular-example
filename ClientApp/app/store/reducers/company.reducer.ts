import { CompanyModel } from '../models/company.model';

export const initialState: CompanyModel = {
  Name: 'Tom and Dave\'s Awesome Juice Bar'
};

export function companyReducer(state = initialState, action: any ): CompanyModel {
  const { type, payload } = action;
  switch (type) {
    default: {
      return state;
    }
  }
}