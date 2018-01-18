import { CustomerModel } from './customer.model';
import { CompanyModel } from './company.model'

export interface AppModel{
    company: CompanyModel,
    customers: CustomerModel[]
}