import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCompanyComponent } from './add-company/add-company.component';
import { AddStockComponent } from './add-stock/add-stock.component';
import { EditCompanyComponent } from './edit-company/edit-company.component';
import { ErrorComponent } from './error/error.component';
import { FindACompanyComponent } from './find-a-company/find-a-company.component';
import { ListAllCompaniesComponent } from './list-all-companies/list-all-companies.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
// { path: '', redirectTo:'get-all-companies', pathMatch: 'full' },
{ path: '', component: LoginComponent },
{ path: 'login', component: LoginComponent },
{ path: 'logout', component: LogoutComponent },
{ path: 'get-all-companies', component: ListAllCompaniesComponent, canActivate:[RouteGuardService] },
{ path: 'get-a-company', component: FindACompanyComponent, canActivate:[RouteGuardService] },
{ path: 'add-stock', component: AddStockComponent, canActivate:[RouteGuardService] },
{ path: 'add-company', component: AddCompanyComponent, canActivate:[RouteGuardService] },
{ path: 'get-all-companies/edit/:code', component: EditCompanyComponent, canActivate:[RouteGuardService] },
{ path: '**', component: ErrorComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
