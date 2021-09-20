import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TransactionCompany } from '../model/transaction-company.model';
import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class EStockMarketService {

  constructor(private http:HttpClient) { }

  public doAddStock(stock: any, companyCode: any) {
    // return this.http.post("http://localhost:9191/api/v1.0/market/stock/add/" + companyCode, stock, {responseType:'text' as 'json'});
    return this.http.post("http://localhost:8989/api/v1.0/market/stock/command/add/" + companyCode, stock, {responseType:'text' as 'json'});
  }

  public doRegisterCompany(stransactionCompany: any): Observable<any>{
    return this.http.post("http://localhost:8989/api/v1.0/market/company/register" , stransactionCompany)
    .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage: string = ''
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${error.error}`
      // console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      // console.error(
      //   `Backend returned code ${error.status}, body was: `, error.error);
        errorMessage = `Backend returned code ${error.status}, reason: ${error.error}`
    }
    // Return an observable with a user-facing error message.
    errorMessage += `\n Please try again.`
    return throwError(errorMessage);
  }


  public getAllStocks() {
    return this.http.get("http://localhost:8989/api/v1.0/market/stock/query/getall");
  }

  public getAllCompanies() {
    return this.http.get<TransactionCompany>("http://localhost:8989/api/v1.0/market/company/getall" );
  }

  public doFindStocksBetweenDates(companyCode: any, startDate: Date, enddate: Date) {
    return this.http.get(`http://localhost:8989/api/v1.0/market/stock/query/get/${companyCode}/${startDate}/${enddate}`)
  }

  public doDeleteACompany (companyCode: any) {
    return this.http.delete(`http://localhost:8989/api/v1.0/market/company/delete/${companyCode}`,{responseType:'text' as 'json'})
  }

  public doGetCompanyByCode(companyCode: any) {
    return this.http.get(`http://localhost:8989/api/v1.0/market/company/info/${companyCode}`)
  }

  public doUpdateACompany (company: any) {
    return this.http.put(`http://localhost:8989/api/v1.0/market/company/update`, company)
  }
}

