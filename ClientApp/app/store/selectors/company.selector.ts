import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppModel } from '../models/app.model';
import { CompanyModel } from '../models/company.model';

export const selectCompany = createFeatureSelector<CompanyModel>('Company');

export const selectCompanyName = createSelector(selectCompany, (company: CompanyModel) => company.Name);
