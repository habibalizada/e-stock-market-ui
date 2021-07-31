import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EStockMarketService {

  constructor(private http:HttpClient) { }

  public doAddStock(stock: any, companyCode: any) {
    return this.http.post("http://localhost:9191/api/v1.0/market/stock/add/" + companyCode, stock, {responseType:'text' as 'json'});

  }
}
