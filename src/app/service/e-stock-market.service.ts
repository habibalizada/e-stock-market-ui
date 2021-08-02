import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseCompany } from '../model/response-company.model';

@Injectable({
  providedIn: 'root'
})
export class EStockMarketService {

  constructor(private http:HttpClient) { }

  public doAddStock(stock: any, companyCode: any) {
    // return this.http.post("http://localhost:9191/api/v1.0/market/stock/add/" + companyCode, stock, {responseType:'text' as 'json'});
    return this.http.post("http://localhost:8989/api/v1.0/market/stock/add/" + companyCode, stock, {responseType:'text' as 'json'});
  }

  public getAllStocks() {
    return this.http.get("http://localhost:9191/api/v1.0/market/stock/getall" ,{responseType:'text' as 'json'});
  }

  public getAllCompanies() {
    return this.http.get<ResponseCompany>("http://localhost:8989/api/v1.0/market/company/getall" );
  }
}

