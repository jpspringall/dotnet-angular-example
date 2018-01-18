import { CompanyModel } from '../models/company.model';
import { SET_COMPANY_NAME } from '../actions/company.actions';
export const initialState: CompanyModel = {
  Name: 'Tom and Dave\'s Awesome Juice Bar'
};

export function companyReducer(state = initialState, action: any ): CompanyModel {
  const { type, payload } = action;
  switch (type) {
    case SET_COMPANY_NAME: {
      return {...state, Name: payload };
    }
    default: {
      return state;
    }
  }
}