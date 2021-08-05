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
import { ErrorComponent } from './error/error.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FindACompanyComponent } from './find-a-company/find-a-company.component'
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    AddStockComponent,
    AddCompanyComponent,
    ListAllCompaniesComponent,
    ErrorComponent,
    FindACompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
