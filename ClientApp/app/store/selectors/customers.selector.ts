import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppModel } from '../models/app.model';
import { CustomerModel } from '../models/customer.model';

export const selectCustomers = createFeatureSelector<CustomerModel[]>('Customers');