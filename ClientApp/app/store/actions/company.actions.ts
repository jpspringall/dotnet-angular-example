import { Action } from '@ngrx/store';

export const GET_COMPANY_NAME = '[COMPANY] Get the company name';

export class GetCompanyName implements Action {
  public readonly type = GET_COMPANY_NAME;

  constructor() {}
}

export type Actions = GetCompanyName ;
