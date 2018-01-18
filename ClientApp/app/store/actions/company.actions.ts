import { Action } from '@ngrx/store';

export const GET_COMPANY_NAME = '[COMPANY] Get the company name';
export const SET_COMPANY_NAME = '[COMPANY] Set the company name';

export class GetCompanyName implements Action {
  public readonly type = GET_COMPANY_NAME;

  constructor() {}
}
export class SetCompanyName implements Action {
  public readonly type = SET_COMPANY_NAME;

  constructor(private payload:string) {}
}

export type Actions = GetCompanyName
| SetCompanyName ;
