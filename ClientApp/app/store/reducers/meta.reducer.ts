import { ActionReducer, MetaReducer, Action } from '@ngrx/store';
import { storeLogger } from 'ngrx-store-logger';

import { AppModel } from '../models/app.model';

export function logger(reducer: ActionReducer<AppModel>): ActionReducer<any, any> {
  const options = {
    collapsed: true,
    timestamp: false,
  };

  return storeLogger(options)(reducer);
}

export const metaReducers: MetaReducer<AppModel, Action>[] =[logger] ;
