import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCompanyComponent } from './add-company/add-company.component';
import { AddStockComponent } from './add-stock/add-stock.component';
import { ErrorComponent } from './error/error.component';
import { FindACompanyComponent } from './find-a-company/find-a-company.component';
import { ListAllCompaniesComponent } from './list-all-companies/list-all-companies.component';
import { ListOneCompanyComponent } from './list-one-company/list-one-company.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
{ path: '', component: LoginComponent },
{ path: 'login', component: LoginComponent },
{ path: 'welcome', component: WelcomeComponent },
{ path: 'get-company', component: ListOneCompanyComponent },
{ path: 'get-all-companies', component: ListAllCompaniesComponent },
{ path: 'get-a-company', component: FindACompanyComponent },
{ path: 'add-stock', component: AddStockComponent },
{ path: 'add-company', component: AddCompanyComponent },
{ path: '**', component: ErrorComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
