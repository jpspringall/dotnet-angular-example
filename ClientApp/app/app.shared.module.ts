import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { CompanyNameComponent } from './components/company-name/company-name.component';
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { CustomerAddComponent } from './components/customer-add/customer-add.component';

import { CompanyNameService} from './services/company-name.service'
import { CustomersService } from './services/customers.service'

@NgModule({
    declarations: [
        AppComponent,
        CompanyNameComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        CustomersListComponent,
        CustomerAddComponent
    ],
    providers: [CompanyNameService, CustomersService],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'customers', 
                children:[
                    { path:'',  component: CustomersListComponent },
                    { path: 'add', component: CustomerAddComponent },
                ]},
            { path: 'fetch-data', component: FetchDataComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModuleShared {
}
