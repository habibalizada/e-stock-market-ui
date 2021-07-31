import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AddStockComponent } from './add-stock/add-stock.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { ListAllCompaniesComponent } from './list-all-companies/list-all-companies.component';
import { ListOneCompanyComponent } from './list-one-company/list-one-company.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    AddStockComponent,
    AddCompanyComponent,
    ListAllCompaniesComponent,
    ListOneCompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
